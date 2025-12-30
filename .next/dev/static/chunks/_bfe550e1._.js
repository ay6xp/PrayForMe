(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/__generated__/pageQuery.graphql.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @generated SignedSource<<076241d80e58d82424345c7e5fc90cf9>>
 * @lightSyntaxTransform
 * @nogrep
 */ /* tslint:disable */ /* eslint-disable */ // @ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const node = function() {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "date"
    }, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "lat"
    }, v2 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "lon"
    }, v3 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "method"
    }, v4 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "school"
    }, v5 = [
        {
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "date",
                    "variableName": "date"
                },
                {
                    "kind": "Variable",
                    "name": "lat",
                    "variableName": "lat"
                },
                {
                    "kind": "Variable",
                    "name": "lon",
                    "variableName": "lon"
                },
                {
                    "kind": "Variable",
                    "name": "method",
                    "variableName": "method"
                },
                {
                    "kind": "Variable",
                    "name": "school",
                    "variableName": "school"
                }
            ],
            "concreteType": "PrayerTimes",
            "kind": "LinkedField",
            "name": "getPrayerTimes",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fajr",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "dhuhr",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "asr",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "maghrib",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isha",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "sunrise",
                    "storageKey": null
                }
            ],
            "storageKey": null
        }
    ];
    return {
        "fragment": {
            "argumentDefinitions": [
                v0 /*: any*/ ,
                v1 /*: any*/ ,
                v2 /*: any*/ ,
                v3 /*: any*/ ,
                v4 /*: any*/ 
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "pageQuery",
            "selections": v5 /*: any*/ ,
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                v1 /*: any*/ ,
                v2 /*: any*/ ,
                v3 /*: any*/ ,
                v4 /*: any*/ ,
                v0 /*: any*/ 
            ],
            "kind": "Operation",
            "name": "pageQuery",
            "selections": v5 /*: any*/ 
        },
        "params": {
            "cacheID": "bbfaf16f3f4289b8f083f6d839edc95d",
            "id": null,
            "metadata": {},
            "name": "pageQuery",
            "operationKind": "query",
            "text": "query pageQuery(\n  $lat: Float!\n  $lon: Float!\n  $method: Int\n  $school: Int\n  $date: String\n) {\n  getPrayerTimes(lat: $lat, lon: $lon, method: $method, school: $school, date: $date) {\n    fajr\n    dhuhr\n    asr\n    maghrib\n    isha\n    sunrise\n  }\n}\n"
        }
    };
}();
node.hash = "b7b44e95ea052b305d9586233d7c0ec0";
const __TURBOPACK__default__export__ = node;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$_$5f$generated_$5f2f$pageQuery$2e$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/__generated__/pageQuery.graphql.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$relay$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-relay/hooks.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const HomePageQuery = (__TURBOPACK__imported__module__$5b$project$5d2f$_$5f$generated_$5f2f$pageQuery$2e$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hash && __TURBOPACK__imported__module__$5b$project$5d2f$_$5f$generated_$5f2f$pageQuery$2e$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hash !== "b7b44e95ea052b305d9586233d7c0ec0" && console.error("The definition of 'pageQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), __TURBOPACK__imported__module__$5b$project$5d2f$_$5f$generated_$5f2f$pageQuery$2e$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
// Simple ImageWithFallback component to avoid missing symbol errors.
// It falls back to the provided fallback image if the main image fails to load.
function ImageWithFallback({ src, alt, className }) {
    _s();
    const [errored, setErrored] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fallback = '/assets/mosque.jpg';
    // Render a single img that fills its container. Keep it simple so callers can place
    // the element absolutely/fixed and size it with utility classes (w-full h-full etc.).
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: errored ? fallback : src,
        alt: alt ?? '',
        onError: ()=>setErrored(true)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_s(ImageWithFallback, "+ZyF5auc5beU+cNGfVLSvkNx2Ro=");
_c = ImageWithFallback;
function to12HourIntl(hhmm) {
    const [hh, mm] = hhmm.split(":").map(Number);
    const d = new Date();
    d.setHours(hh, mm, 0, 0);
    return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    }).format(d);
}
function HomePage() {
    _s1();
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 1️⃣ Detect location
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            navigator.geolocation.getCurrentPosition({
                "HomePage.useEffect": (pos)=>{
                    setCoords({
                        lat: pos.coords.latitude,
                        lon: pos.coords.longitude
                    });
                }
            }["HomePage.useEffect"], {
                "HomePage.useEffect": (err)=>{
                    console.error("Location error:", err);
                }
            }["HomePage.useEffect"]);
        }
    }["HomePage.useEffect"], []);
    const variables = coords ? {
        lat: coords.lat,
        lon: coords.lon,
        method: 2,
        school: 0
    } : {
        lat: 0,
        lon: 0,
        method: 2,
        school: 0
    };
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$relay$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyLoadQuery"])(HomePageQuery, variables, {
        fetchPolicy: coords ? 'store-or-network' : 'store-only'
    });
    const prayerTimes = data.getPrayerTimes;
    // If coords not ready, show loading screen
    if (!coords) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "2rem",
                color: "white"
            },
            children: "Detecting your location…"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 74,
            columnNumber: 12
        }, this);
    }
    const locations = [
        {
            id: 'mecca',
            label: 'Mecca'
        },
        {
            id: 'medina',
            label: 'Medina'
        }
    ];
    const cards = [
        {
            key: 'fajr',
            label: 'FAJR',
            time: to12HourIntl(prayerTimes.fajr),
            emoji: '🌅'
        },
        {
            key: 'sunrise',
            label: 'SUNRISE',
            time: to12HourIntl(prayerTimes.sunrise),
            emoji: '🌄'
        },
        {
            key: 'dhuhr',
            label: 'DHUHR',
            time: to12HourIntl(prayerTimes.dhuhr),
            emoji: '☀️'
        },
        {
            key: 'asr',
            label: 'ASR',
            time: to12HourIntl(prayerTimes.asr),
            emoji: '⛅'
        },
        {
            key: 'maghrib',
            label: 'MAGHRIB',
            time: to12HourIntl(prayerTimes.maghrib),
            emoji: '🏙️'
        },
        {
            key: 'isha',
            label: 'ISHA',
            time: to12HourIntl(prayerTimes.isha),
            emoji: '🌙'
        }
    ];
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }).format(today);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageWithFallback, {
                        src: "/assets/mosque.jpg",
                        alt: "Grand mosque"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overlay"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Prayer Times"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Today's Schedule – ",
                            formattedDate
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prayer-grid",
                    children: cards.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prayer-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon",
                                    children: p.emoji
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "label",
                                    children: p.label
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "time",
                                    children: p.time
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, p.key, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 139,
                            columnNumber: 37
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 138,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 137,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-pill",
                    children: "☪️ May your prayers be accepted ☪️"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 124,
        columnNumber: 10
    }, this);
}
_s1(HomePage, "EJ/QYPcLJoNK9UJHHd1egtsk9C8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$relay$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyLoadQuery"]
    ];
});
_c1 = HomePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ImageWithFallback");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_bfe550e1._.js.map