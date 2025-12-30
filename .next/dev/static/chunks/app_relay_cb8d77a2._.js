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
"[project]/app/relay/RelayProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelayProvider",
    ()=>RelayProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$relay$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-relay/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$relay$2f$RelayEnvironment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/relay/RelayEnvironment.ts [app-client] (ecmascript)");
'use client';
;
;
;
function RelayProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$relay$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelayEnvironmentProvider"], {
        environment: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$relay$2f$RelayEnvironment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["environment"],
        children: children
    }, void 0, false, {
        fileName: "[project]/app/relay/RelayProvider.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = RelayProvider;
var _c;
__turbopack_context__.k.register(_c, "RelayProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_relay_cb8d77a2._.js.map