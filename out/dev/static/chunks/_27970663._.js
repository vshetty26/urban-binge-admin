(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AuthProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AuthProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "eb3c88164a8fc244414db998b3448877d75c9f04b2900a31217ad9865deb52a9") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eb3c88164a8fc244414db998b3448877d75c9f04b2900a31217ad9865deb52a9";
    }
    const { children } = t0;
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AuthProvider[useEffect()]": ()=>{
                setMounted(true);
                if ("TURBOPACK compile-time truthy", 1) {
                    const sessionStr = localStorage.getItem("chopstick-admin-session");
                    if (sessionStr) {
                        try {
                            const session = JSON.parse(sessionStr);
                            if (Date.now() - session.loginTime < 79200000) {
                                setIsAuthenticated(true);
                            } else {
                                localStorage.removeItem("chopstick-admin-session");
                            }
                        } catch  {
                            localStorage.removeItem("chopstick-admin-session");
                        }
                    }
                }
            }
        })["AuthProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== password) {
        t3 = ({
            "AuthProvider[handleLogin]": (e)=>{
                e.preventDefault();
                if (password === "admin123") {
                    setIsAuthenticated(true);
                    localStorage.setItem("chopstick-admin-session", JSON.stringify({
                        loginTime: Date.now()
                    }));
                    setError("");
                } else {
                    setError("Incorrect password");
                }
            }
        })["AuthProvider[handleLogin]"];
        $[3] = password;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleLogin = t3;
    if (!mounted) {
        return null;
    }
    if (!isAuthenticated) {
        let t4;
        let t5;
        let t6;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLock"], {}, void 0, false, {
                    fileName: "[project]/components/AuthProvider.tsx",
                    lineNumber: 82,
                    columnNumber: 131
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AuthProvider.tsx",
                lineNumber: 82,
                columnNumber: 12
            }, this);
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-gray-900 mb-2",
                children: "Admin Access"
            }, void 0, false, {
                fileName: "[project]/components/AuthProvider.tsx",
                lineNumber: 83,
                columnNumber: 12
            }, this);
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 mb-8",
                children: "Enter password to access Chopstick admin portal."
            }, void 0, false, {
                fileName: "[project]/components/AuthProvider.tsx",
                lineNumber: 84,
                columnNumber: 12
            }, this);
            $[5] = t4;
            $[6] = t5;
            $[7] = t6;
        } else {
            t4 = $[5];
            t5 = $[6];
            t6 = $[7];
        }
        let t7;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = ({
                "AuthProvider[<input>.onChange]": (e_0)=>setPassword(e_0.target.value)
            })["AuthProvider[<input>.onChange]"];
            $[8] = t7;
        } else {
            t7 = $[8];
        }
        let t8;
        if ($[9] !== password) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    value: password,
                    onChange: t7,
                    placeholder: "Enter password",
                    className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/components/AuthProvider.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AuthProvider.tsx",
                lineNumber: 104,
                columnNumber: 12
            }, this);
            $[9] = password;
            $[10] = t8;
        } else {
            t8 = $[10];
        }
        let t9;
        if ($[11] !== error) {
            t9 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm font-medium",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/AuthProvider.tsx",
                lineNumber: 112,
                columnNumber: 21
            }, this);
            $[11] = error;
            $[12] = t9;
        } else {
            t9 = $[12];
        }
        let t10;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors cursor-pointer shadow-md",
                children: "Login"
            }, void 0, false, {
                fileName: "[project]/components/AuthProvider.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this);
            $[13] = t10;
        } else {
            t10 = $[13];
        }
        let t11;
        if ($[14] !== handleLogin || $[15] !== t8 || $[16] !== t9) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md text-center",
                    children: [
                        t4,
                        t5,
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleLogin,
                            className: "space-y-4",
                            children: [
                                t8,
                                t9,
                                t10
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AuthProvider.tsx",
                            lineNumber: 127,
                            columnNumber: 206
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AuthProvider.tsx",
                    lineNumber: 127,
                    columnNumber: 91
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AuthProvider.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this);
            $[14] = handleLogin;
            $[15] = t8;
            $[16] = t9;
            $[17] = t11;
        } else {
            t11 = $[17];
        }
        return t11;
    }
    let t4;
    if ($[18] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
        $[18] = children;
        $[19] = t4;
    } else {
        t4 = $[19];
    }
    return t4;
}
_s(AuthProvider, "SLh943FgXI+g+wdmtpwLAI/orAc=");
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "db",
    ()=>db,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDYVCLIRts_LRu5ls1jb7afJOJ3HF_RMSs"),
    authDomain: ("TURBOPACK compile-time value", "urban-binge-oms.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "urban-binge-oms"),
    storageBucket: ("TURBOPACK compile-time value", "urban-binge-oms.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "558585692434"),
    appId: ("TURBOPACK compile-time value", "1:558585692434:web:1611383571a8954ab3f3cb"),
    measurementId: ("TURBOPACK compile-time value", "G-2BNT4NEE8T")
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/orders.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteAllOrders",
    ()=>deleteAllOrders,
    "getAllOrders",
    ()=>getAllOrders,
    "getOrder",
    ()=>getOrder,
    "subscribeToAllOrders",
    ()=>subscribeToAllOrders,
    "updateOrderStatus",
    ()=>updateOrderStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript)");
;
;
const ORDERS_COLLECTION = "orders";
async function getOrder(orderId) {
    const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], ORDERS_COLLECTION, orderId));
    if (!docSnap.exists()) return null;
    return {
        id: docSnap.id,
        ...docSnap.data()
    };
}
async function getAllOrders() {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], ORDERS_COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("createdAt", "desc"));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snapshot.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
}
async function updateOrderStatus(orderId, status) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], ORDERS_COLLECTION, orderId), {
        status,
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    });
}
function subscribeToAllOrders(callback) {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], ORDERS_COLLECTION), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("createdAt", "desc"));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snapshot)=>{
        const orders = snapshot.docs.map((d)=>({
                id: d.id,
                ...d.data()
            }));
        callback(orders);
    });
}
async function deleteAllOrders() {
    const orders = await getAllOrders();
    if (orders.length === 0) return;
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    orders.forEach((order)=>{
        if (order.id) {
            batch.delete((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], ORDERS_COLLECTION, order.id));
        }
    });
    await batch.commit();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AudioNotification.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AudioNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$orders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/orders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// ─── Loud Bell Sound via Web Audio API ───
function createBellSound(audioCtx) {
    playBellStrike(audioCtx, audioCtx.currentTime);
    playBellStrike(audioCtx, audioCtx.currentTime + 0.25);
}
function playBellStrike(audioCtx, startTime) {
    const freqs = [
        830,
        1245,
        1660,
        2490
    ];
    const gains = [
        1.0,
        0.7,
        0.5,
        0.3
    ];
    const durations = [
        1.2,
        0.9,
        0.7,
        0.5
    ];
    freqs.forEach((freq, i)=>{
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
// Silent tick to keep AudioContext active
function playSilentTick(audioCtx) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    gain.gain.value = 0.0001; // Extremely low gain, practically silent
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
}
function AudioNotification() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "76febcb403f1ab88df4a84adde96e477c8c6e8121993b74992fb237d24245678") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "76febcb403f1ab88df4a84adde96e477c8c6e8121993b74992fb237d24245678";
    }
    const [showOverlay, setShowOverlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [audioInitialized, setAudioInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const alertsEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Set();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const alertedOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const pendingCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const workerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wakeLockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "AudioNotification[requestWakeLock]": async ()=>{
                if ("wakeLock" in navigator) {
                    ;
                    try {
                        wakeLockRef.current = await navigator.wakeLock.request("screen");
                        console.log("Wake Lock is active");
                        wakeLockRef.current.addEventListener("release", _AudioNotificationRequestWakeLockWakeLockRefCurrentAddEventListener);
                    } catch (t2) {
                        const err = t2;
                        console.error(`${err.name}, ${err.message}`);
                    }
                }
            }
        })["AudioNotification[requestWakeLock]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const requestWakeLock = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AudioNotification[handleEnableAudio]": async ()=>{
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!audioCtxRef.current) {
                    audioCtxRef.current = new AudioCtx();
                }
                const ctx = audioCtxRef.current;
                if (ctx.state === "suspended") {
                    await ctx.resume().catch(_AudioNotificationHandleEnableAudioAnonymous);
                }
                playSilentTick(ctx);
                alertsEnabled.current = true;
                setAudioInitialized(true);
                setShowOverlay(false);
                requestWakeLock();
                if (pendingCount.current > 0) {
                    workerRef.current?.postMessage("start");
                }
            }
        })["AudioNotification[handleEnableAudio]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleEnableAudio = t2;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "AudioNotification[useEffect()]": ()=>{
                const blob = new Blob([
                    "\n            let timer = null;\n            self.onmessage = function(e) {\n                if (e.data === 'start') {\n                    if (!timer) {\n                        // Heartbeat/Ring every 3 seconds\n                        timer = setInterval(() => self.postMessage('tick'), 3000);\n                        self.postMessage('tick');\n                    }\n                } else if (e.data === 'stop') {\n                    clearInterval(timer);\n                    timer = null;\n                }\n            };\n        "
                ], {
                    type: "application/javascript"
                });
                const worker = new Worker(URL.createObjectURL(blob));
                workerRef.current = worker;
                worker.onmessage = async ()=>{
                    const ctx_0 = audioCtxRef.current;
                    if (!ctx_0 || !alertsEnabled.current) {
                        return;
                    }
                    if (ctx_0.state === "suspended") {
                        await ctx_0.resume().catch(_AudioNotificationUseEffectAnonymousAnonymous);
                    }
                    if (pendingCount.current > 0) {
                        createBellSound(ctx_0);
                    } else {
                        playSilentTick(ctx_0);
                    }
                };
                const handleVisibilityChange = {
                    "AudioNotification[useEffect() > handleVisibilityChange]": ()=>{
                        if (wakeLockRef.current !== null && document.visibilityState === "visible") {
                            requestWakeLock();
                        }
                    }
                }["AudioNotification[useEffect() > handleVisibilityChange]"];
                document.addEventListener("visibilitychange", handleVisibilityChange);
                if ("Notification" in window && Notification.permission !== "granted" && Notification.permission !== "denied") {
                    Notification.requestPermission();
                }
                return ()=>{
                    worker.terminate();
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                    if (wakeLockRef.current) {
                        wakeLockRef.current.release().catch(_AudioNotificationUseEffectAnonymousAnonymous2);
                    }
                };
            }
        })["AudioNotification[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "AudioNotification[startBell]": ()=>{
                if (!alertsEnabled.current) {
                    return;
                }
                workerRef.current?.postMessage("start");
            }
        })["AudioNotification[startBell]"];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const startBell = t5;
    let t6;
    let t7;
    if ($[7] !== audioInitialized) {
        t6 = ({
            "AudioNotification[useEffect()]": ()=>{
                const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$orders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToAllOrders"])({
                    "AudioNotification[useEffect() > subscribeToAllOrders()]": (allOrders)=>{
                        const pendingOrders = allOrders.filter(_AudioNotificationUseEffectSubscribeToAllOrdersAllOrdersFilter);
                        pendingCount.current = pendingOrders.length;
                        pendingOrders.forEach({
                            "AudioNotification[useEffect() > subscribeToAllOrders() > pendingOrders.forEach()]": (order)=>{
                                if (order.id && !alertedOrders.current.has(order.id)) {
                                    alertedOrders.current.add(order.id);
                                    if ("Notification" in window && Notification.permission === "granted") {
                                        new Notification("New Order Received", {
                                            body: `A new order has arrived from ${order.customerName}.`,
                                            icon: "/favicon.ico"
                                        });
                                    }
                                }
                            }
                        }["AudioNotification[useEffect() > subscribeToAllOrders() > pendingOrders.forEach()]"]);
                        const pendingIds = new Set(pendingOrders.map(_AudioNotificationUseEffectSubscribeToAllOrdersPendingOrdersMap));
                        alertedOrders.current.forEach({
                            "AudioNotification[useEffect() > subscribeToAllOrders() > alertedOrders.current.forEach()]": (id)=>{
                                if (!pendingIds.has(id)) {
                                    alertedOrders.current.delete(id);
                                }
                            }
                        }["AudioNotification[useEffect() > subscribeToAllOrders() > alertedOrders.current.forEach()]"]);
                        if (audioInitialized) {
                            startBell();
                        }
                    }
                }["AudioNotification[useEffect() > subscribeToAllOrders()]"]);
                return ()=>{
                    unsub();
                };
            }
        })["AudioNotification[useEffect()]"];
        t7 = [
            audioInitialized
        ];
        $[7] = audioInitialized;
        $[8] = t6;
        $[9] = t7;
    } else {
        t6 = $[8];
        t7 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[10] !== showOverlay) {
        t8 = showOverlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.9,
                    opacity: 0,
                    y: 20
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    y: 0
                },
                className: "bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl animate-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaVolumeUp"], {}, void 0, false, {
                            fileName: "[project]/components/AudioNotification.tsx",
                            lineNumber: 248,
                            columnNumber: 242
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/AudioNotification.tsx",
                        lineNumber: 248,
                        columnNumber: 109
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-3",
                        children: "Enable Order Alerts"
                    }, void 0, false, {
                        fileName: "[project]/components/AudioNotification.tsx",
                        lineNumber: 248,
                        columnNumber: 262
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mb-8 leading-relaxed",
                        children: "To ensure you never miss an order, we need to enable audio and prevent your device from sleeping."
                    }, void 0, false, {
                        fileName: "[project]/components/AudioNotification.tsx",
                        lineNumber: 248,
                        columnNumber: 340
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleEnableAudio,
                        className: "w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBell"], {
                                className: "text-xl"
                            }, void 0, false, {
                                fileName: "[project]/components/AudioNotification.tsx",
                                lineNumber: 248,
                                columnNumber: 738
                            }, this),
                            "Enable Audio & Status"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AudioNotification.tsx",
                        lineNumber: 248,
                        columnNumber: 491
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex items-center justify-center gap-2 text-xs text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShieldAlt"], {}, void 0, false, {
                                fileName: "[project]/components/AudioNotification.tsx",
                                lineNumber: 248,
                                columnNumber: 885
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Ensures 100% notification reliability"
                            }, void 0, false, {
                                fileName: "[project]/components/AudioNotification.tsx",
                                lineNumber: 248,
                                columnNumber: 900
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AudioNotification.tsx",
                        lineNumber: 248,
                        columnNumber: 802
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AudioNotification.tsx",
                lineNumber: 240,
                columnNumber: 109
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/AudioNotification.tsx",
            lineNumber: 234,
            columnNumber: 25
        }, this);
        $[10] = showOverlay;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t8
        }, void 0, false, {
            fileName: "[project]/components/AudioNotification.tsx",
            lineNumber: 256,
            columnNumber: 10
        }, this);
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== audioInitialized) {
        t10 = audioInitialized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold shadow-sm border border-green-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 bg-green-500 rounded-full animate-ping"
                }, void 0, false, {
                    fileName: "[project]/components/AudioNotification.tsx",
                    lineNumber: 264,
                    columnNumber: 209
                }, this),
                "Audio & Wake Lock Active"
            ]
        }, void 0, true, {
            fileName: "[project]/components/AudioNotification.tsx",
            lineNumber: 264,
            columnNumber: 31
        }, this);
        $[14] = audioInitialized;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10 || $[17] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t9,
                t10
            ]
        }, void 0, true);
        $[16] = t10;
        $[17] = t9;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    return t11;
}
_s(AudioNotification, "Rc/p9IjR8u/VtPN5LMqpPpeeCeI=");
_c = AudioNotification;
function _AudioNotificationUseEffectSubscribeToAllOrdersPendingOrdersMap(o_0) {
    return o_0.id;
}
function _AudioNotificationUseEffectSubscribeToAllOrdersAllOrdersFilter(o) {
    return o.status === "placed";
}
function _AudioNotificationUseEffectAnonymousAnonymous2() {}
function _AudioNotificationUseEffectAnonymousAnonymous() {}
function _AudioNotificationHandleEnableAudioAnonymous() {}
function _AudioNotificationRequestWakeLockWakeLockRefCurrentAddEventListener() {
    console.log("Wake Lock was released");
}
var _c;
__turbopack_context__.k.register(_c, "AudioNotification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_27970663._.js.map