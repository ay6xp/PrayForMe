(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/relay/RelayEnvironment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "environment",
    ()=>environment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$relay$2d$runtime$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/relay-runtime/index.js [app-client] (ecmascript)");
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
const environment = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$relay$2d$runtime$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"]({
    network: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$relay$2d$runtime$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Network"].create(fetchQuery),
    store: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$relay$2d$runtime$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Store"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$relay$2d$runtime$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecordSource"]())
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_relay_RelayEnvironment_ts_da36cfc6._.js.map