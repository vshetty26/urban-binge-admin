"use client";

import { useEffect, useRef, useState } from "react";
import { subscribeToAllOrders } from "@/lib/orders";
import { motion, AnimatePresence } from "framer-motion";
import { FaVolumeUp, FaBell, FaShieldAlt } from "react-icons/fa";

// ─── Play Custom Audio File ───
async function playCustomSound(audioPath: string = "/ORDER%20RINGTONE.m4a") {
    try {
        const audio = new Audio(audioPath);
        audio.volume = 1.0; // Full volume
        await audio.play();
    } catch (err) {
        console.error(`❌ Error playing sound: ${err}`);
    }
}

// ─── Fallback: Loud Bell Sound via Web Audio API ───
function createBellSound(audioCtx: AudioContext) {
    playBellStrike(audioCtx, audioCtx.currentTime);
    playBellStrike(audioCtx, audioCtx.currentTime + 0.25);
}

function playBellStrike(audioCtx: AudioContext, startTime: number) {
    const freqs = [830, 1245, 1660, 2490];
    const gains = [1.0, 0.7, 0.5, 0.3];
    const durations = [1.2, 0.9, 0.7, 0.5];

    freqs.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        osc.type = i === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, startTime);

        const gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(gains[i], startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + durations[i]);

        const compressor = audioCtx.createDynamicsCompressor();
        compressor.threshold.setValueAtTime(-10, startTime);
        compressor.knee.setValueAtTime(5, startTime);
        compressor.ratio.setValueAtTime(4, startTime);

        osc.connect(gainNode).connect(compressor).connect(audioCtx.destination);
        osc.start(startTime);
        osc.stop(startTime + durations[i]);
    });
}

// Keep-alive tick with audible volume
function playKeepAliveTick(audioCtx: AudioContext) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    gain.gain.value = 0.01;
    osc.frequency.value = 100;
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
}

export default function AudioNotification() {
    const [showOverlay, setShowOverlay] = useState(true);
    const [audioInitialized, setAudioInitialized] = useState(false);
    const [useCustomSound, setUseCustomSound] = useState(true); // true = custom ringtone, false = bell
    
    const alertsEnabled = useRef(false);
    const alertedOrders = useRef<Set<string>>(new Set());
    const initialLoadComplete = useRef(false); // Track if first load is done
    const pendingCount = useRef(0);
    const workerRef = useRef<Worker | null>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const wakeLockRef = useRef<any>(null);
    const lastBellTime = useRef<number>(0);

    // Request Wake Lock to prevent system sleep
    const requestWakeLock = async () => {
        if ('wakeLock' in navigator) {
            try {
                wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
                
                wakeLockRef.current.addEventListener('release', () => {
                    console.log('⚠️ Wake Lock was released');
                });
            } catch (err: any) {
                console.error(`❌ Wake Lock Error: ${err.name}, ${err.message}`);
            }
        }
    };

    const handleEnableAudio = async () => {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtxRef.current) {
            audioCtxRef.current = new AudioCtx();
        }
        const ctx = audioCtxRef.current;

        // Unlock audio context
        if (ctx.state === "suspended") {
            await ctx.resume().catch((err) => {
                console.error("❌ Failed to resume audio context:", err);
            });
        }

        // Play initial test sound
        if (useCustomSound) {
            await playCustomSound();
        } else {
            createBellSound(ctx);
        }
        
        alertsEnabled.current = true;
        setAudioInitialized(true);
        setShowOverlay(false);

        // Start Wake Lock
        requestWakeLock();

        // If there are already pending orders, start the bell
        if (pendingCount.current > 0) {
            workerRef.current?.postMessage('start');
        }
    };

    useEffect(() => {
        // Initialize Web Worker for reliable timing
        const workerCode = `
            let timer = null;
            self.onmessage = function(e) {
                if (e.data === 'start') {
                    if (!timer) {
                        timer = setInterval(() => self.postMessage('tick'), 2000);
                        self.postMessage('tick');
                    }
                } else if (e.data === 'stop') {
                    clearInterval(timer);
                    timer = null;
                }
            };
        `;
        const blob = new Blob([workerCode], { type: "application/javascript" });
        const worker = new Worker(URL.createObjectURL(blob));
        workerRef.current = worker;

        worker.onmessage = async () => {
            const ctx = audioCtxRef.current;
            if (!ctx || !alertsEnabled.current) return;

            // Resume context if suspended
            if (ctx.state === "suspended") {
                await ctx.resume().catch(() => {});
            }

            // Play sound based on pending orders
            if (pendingCount.current > 0) {
                const now = Date.now();
                // Throttle bell to every 2 seconds max
                if (now - lastBellTime.current > 1500) {
                    if (useCustomSound) {
                        await playCustomSound();
                    } else {
                        createBellSound(ctx);
                    }
                    lastBellTime.current = now;
                }
            } else {
                // Keep audio context alive with quiet tick
                if (!useCustomSound) {
                    playKeepAliveTick(ctx);
                }
            }
        };

        // Re-request wake lock when page becomes visible
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                requestWakeLock();
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Request browser notification permission
        if ("Notification" in window && Notification.permission !== "granted" && Notification.permission !== "denied") {
            Notification.requestPermission();
        }

        return () => {
            worker.terminate();
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (wakeLockRef.current) {
                wakeLockRef.current.release().catch(() => {});
            }
        };
    }, [useCustomSound]);

    const startBell = () => {
        if (!alertsEnabled.current) {
            return;
        }
        workerRef.current?.postMessage('start');
    };

    useEffect(() => {
        const unsub = subscribeToAllOrders((allOrders) => {
            const pendingOrders = allOrders.filter(o => o.status === "placed");
            pendingCount.current = pendingOrders.length;

            // On first load, mark all existing orders as already alerted (don't ring for them)
            if (!initialLoadComplete.current) {
                pendingOrders.forEach(order => {
                    if (order.id) {
                        alertedOrders.current.add(order.id);
                    }
                });
                initialLoadComplete.current = true;
                console.log(`✅ Initial load complete - marked ${pendingOrders.length} existing orders`);
            } else {
                // After first load, only alert for NEW orders
                pendingOrders.forEach(order => {
                    if (order.id && !alertedOrders.current.has(order.id)) {
                        alertedOrders.current.add(order.id);

                        if ("Notification" in window && Notification.permission === "granted") {
                            new Notification("🔔 New Order Received", {
                                body: `Order from ${order.customerName}`,
                                icon: "/favicon.ico",
                                tag: "order-notification",
                                requireInteraction: true
                            });
                        }
                    }
                });
            }

            // Clean up alerted orders that are no longer pending
            const pendingIds = new Set(pendingOrders.map(o => o.id));
            alertedOrders.current.forEach(id => {
                if (!pendingIds.has(id)) {
                    alertedOrders.current.delete(id);
                }
            });

            // Start worker for both ringing and keep-alive
            if (audioInitialized) {
                startBell();
            }
        });

        return () => {
            unsub();
        };
    }, [audioInitialized]);

    return (
        <>
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border border-gray-100"
                        >
                            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl animate-pulse">
                                <FaVolumeUp />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Enable Order Alerts</h2>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                To ensure you never miss an order, we need to enable audio and prevent your device from sleeping.
                            </p>
                            <button
                                onClick={handleEnableAudio}
                                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg cursor-pointer"
                            >
                                <FaBell className="text-xl" />
                                Enable Audio & Status
                            </button>
                            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                                <FaShieldAlt />
                                <span>Ensures 100% notification reliability</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Audio Status Indicator for Admin */}
            {audioInitialized && (
                <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold shadow-sm border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                    Audio Active 🎵
                </div>
            )}
        </>
    );
}
