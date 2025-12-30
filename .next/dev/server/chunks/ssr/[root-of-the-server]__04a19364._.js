module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
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
"[project]/app/relay/RelayProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelayProvider",
    ()=>RelayProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$relay$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-relay/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$relay$2f$RelayEnvironment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/relay/RelayEnvironment.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function RelayProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$relay$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RelayEnvironmentProvider"], {
        environment: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$relay$2f$RelayEnvironment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["environment"],
        children: children
    }, void 0, false, {
        fileName: "[project]/app/relay/RelayProvider.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__04a19364._.js.map