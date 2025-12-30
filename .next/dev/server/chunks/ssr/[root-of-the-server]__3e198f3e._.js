module.exports = [
"[project]/app/relay/RelayEnvironment.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environment",
    ()=>environment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$relay$2d$runtime$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/relay-runtime/index.js [app-ssr] (ecmascript)");
'use client';
;
const fetchQuery = async (operation, variables)=>{
    const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    });
    return response.json();
};
const environment = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$relay$2d$runtime$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Environment"]({
    network: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$relay$2d$runtime$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Network"].create(fetchQuery),
    store: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$relay$2d$runtime$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Store"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$relay$2d$runtime$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecordSource"]())
});
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3e198f3e._.js.map