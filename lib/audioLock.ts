/**
 * Audio Lock System - Ensures only one admin device plays the sound
 * Uses Firestore to coordinate which device should play audio
 */

import { db } from "./firebase";
import { doc, setDoc, getDoc, onSnapshot, Timestamp } from "firebase/firestore";

const AUDIO_LOCK_DOC = "system/audioLock";
const LOCK_TIMEOUT = 5000; // 5 seconds - lock expires after this

export interface AudioLock {
    deviceId: string;
    timestamp: Timestamp;
    expiresAt: number;
}

/**
 * Generate unique device ID
 */
export function getDeviceId(): string {
    let deviceId = localStorage.getItem("admin-device-id");
    if (!deviceId) {
        deviceId = `device-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem("admin-device-id", deviceId);
    }
    return deviceId;
}

/**
 * Try to acquire audio lock
 */
export async function acquireAudioLock(): Promise<boolean> {
    try {
        const deviceId = getDeviceId();
        const now = Date.now();
        const expiresAt = now + LOCK_TIMEOUT;

        // Try to set the lock
        await setDoc(
            doc(db, AUDIO_LOCK_DOC),
            {
                deviceId,
                timestamp: Timestamp.now(),
                expiresAt
            },
            { merge: false }
        );

        console.log(`🔒 Audio lock acquired by ${deviceId}`);
        return true;
    } catch (err) {
        console.log("⚠️ Could not acquire audio lock (another device has it)");
        return false;
    }
}

/**
 * Check if this device has the audio lock
 */
export async function hasAudioLock(): Promise<boolean> {
    try {
        const deviceId = getDeviceId();
        const lockDoc = await getDoc(doc(db, AUDIO_LOCK_DOC));

        if (!lockDoc.exists()) {
            return false;
        }

        const lock = lockDoc.data() as AudioLock;
        const now = Date.now();

        // Check if lock is expired
        if (now > lock.expiresAt) {
            console.log("⏰ Audio lock expired, acquiring new one...");
            return await acquireAudioLock();
        }

        // Check if this device has the lock
        const hasLock = lock.deviceId === deviceId;
        console.log(`🔍 Device ${deviceId} has lock: ${hasLock}`);
        return hasLock;
    } catch (err) {
        console.error("❌ Error checking audio lock:", err);
        return false;
    }
}

/**
 * Subscribe to audio lock changes
 */
export function subscribeToAudioLock(callback: (hasLock: boolean) => void): () => void {
    const deviceId = getDeviceId();

    return onSnapshot(doc(db, AUDIO_LOCK_DOC), (snapshot) => {
        if (!snapshot.exists()) {
            callback(false);
            return;
        }

        const lock = snapshot.data() as AudioLock;
        const now = Date.now();

        // Check if lock is expired
        if (now > lock.expiresAt) {
            console.log("⏰ Audio lock expired");
            callback(false);
            return;
        }

        const hasLock = lock.deviceId === deviceId;
        console.log(`📡 Audio lock holder: ${lock.deviceId}, this device: ${deviceId}, has lock: ${hasLock}`);
        callback(hasLock);
    });
}

/**
 * Release audio lock
 */
export async function releaseAudioLock(): Promise<void> {
    try {
        const deviceId = getDeviceId();
        const lockDoc = await getDoc(doc(db, AUDIO_LOCK_DOC));

        if (lockDoc.exists()) {
            const lock = lockDoc.data() as AudioLock;
            if (lock.deviceId === deviceId) {
                await setDoc(doc(db, AUDIO_LOCK_DOC), { deviceId: "", timestamp: null, expiresAt: 0 });
                console.log("🔓 Audio lock released");
            }
        }
    } catch (err) {
        console.error("❌ Error releasing audio lock:", err);
    }
}
