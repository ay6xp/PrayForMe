module.exports = [
"[project]/__generated__/pageQuery.graphql.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/client/BackgroundPortal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
"use client";
;
;
function BackgroundPortal({ children }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const hostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const host = document.createElement('div');
        host.setAttribute('id', 'app-bg-portal');
        // cover viewport and sit behind everything
        host.style.position = 'fixed';
        host.style.inset = '0';
        host.style.zIndex = '-99999';
        host.style.pointerEvents = 'none';
        document.body.appendChild(host);
        hostRef.current = host;
        setMounted(true);
        return ()=>{
            if (hostRef.current) document.body.removeChild(hostRef.current);
        };
    }, []);
    if (!mounted || !hostRef.current) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(children, hostRef.current);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$_$5f$generated_$5f2f$pageQuery$2e$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/__generated__/pageQuery.graphql.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$BackgroundPortal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/BackgroundPortal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$relay$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-relay/hooks.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const HomePageQuery = (__TURBOPACK__imported__module__$5b$project$5d2f$_$5f$generated_$5f2f$pageQuery$2e$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hash && __TURBOPACK__imported__module__$5b$project$5d2f$_$5f$generated_$5f2f$pageQuery$2e$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hash !== "b7b44e95ea052b305d9586233d7c0ec0" && console.error("The definition of 'pageQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), __TURBOPACK__imported__module__$5b$project$5d2f$_$5f$generated_$5f2f$pageQuery$2e$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
// Simple ImageWithFallback component to avoid missing symbol errors.
// It falls back to the provided fallback image if the main image fails to load.
function ImageWithFallback({ src, alt, className }) {
    const [errored, setErrored] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fallback = '/mosque-bg.jpg';
    // Render a single img that fills its container. Keep it simple so callers can place
    // the element absolutely/fixed and size it with utility classes (w-full h-full etc.).
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: errored ? fallback : src,
        alt: alt ?? '',
        onError: ()=>setErrored(true),
        className: className,
        // Ensure the image fills the container and uses cover behavior as a safety net
        style: {
            width: '100%',
            height: '100%'
        }
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function HomePage() {
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // 1️⃣ Detect location
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setCoords({
                lat: pos.coords.latitude,
                lon: pos.coords.longitude
            });
        }, (err)=>{
            console.error("Location error:", err);
        });
    }, []);
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
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$relay$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLazyLoadQuery"])(HomePageQuery, variables, {
        fetchPolicy: coords ? 'store-or-network' : 'store-only'
    });
    const prayerTimes = data.getPrayerTimes;
    // If coords not ready, show loading screen
    if (!coords) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "2rem",
                color: "white"
            },
            children: "Detecting your location…"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 69,
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
            time: prayerTimes.fajr,
            emoji: '🌅'
        },
        {
            key: 'sunrise',
            label: 'SUNRISE',
            time: prayerTimes.sunrise,
            emoji: '🌄'
        },
        {
            key: 'dhuhr',
            label: 'DHUHR',
            time: prayerTimes.dhuhr,
            emoji: '☀️'
        },
        {
            key: 'asr',
            label: 'ASR',
            time: prayerTimes.asr,
            emoji: '⛅'
        },
        {
            key: 'maghrib',
            label: 'MAGHRIB',
            time: prayerTimes.maghrib,
            emoji: '🏙️'
        },
        {
            key: 'isha',
            label: 'ISHA',
            time: prayerTimes.isha,
            emoji: '🌙'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen relative overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$BackgroundPortal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageWithFallback, {
                            src: "https://images.unsplash.com/photo-1636111505978-6a08217d7d36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMG1vc3F1ZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjY2OTg5ODR8MA&ixlib=rb-4.1.0&q=80&w=1600&utm_source=figma&utm_medium=referral",
                            alt: "Grand mosque",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-emerald-900/65 via-emerald-800/45 to-amber-900/50"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-50 mx-auto max-w-7xl px-8 pt-12 pb-20 text-center text-white",
                style: {
                    zIndex: 9999
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-7xl md:text-8xl font-extrabold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]",
                        children: "Prayer Times"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-lg md:text-xl text-amber-300",
                        children: [
                            "Today's Schedule - ",
                            new Date().toLocaleDateString(undefined, {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm text-amber-100 mr-2",
                                children: "Location:"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 134,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "appearance-none bg-white text-emerald-900 px-4 py-2 rounded-lg shadow-md w-40 text-sm",
                                        defaultValue: locations[0].id,
                                        children: locations.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: l.id,
                                                children: l.label
                                            }, l.id, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 49
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pointer-events-none absolute inset-y-0 right-3 flex items-center text-emerald-700",
                                        children: "▾"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 135,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",
                        children: cards.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "relative bg-white/95 rounded-2xl shadow-2xl p-8 text-emerald-900 flex flex-col items-center justify-center min-h-[160px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-md bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center shadow-inner mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: c.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm tracking-widest font-semibold text-emerald-700",
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 text-3xl md:text-4xl font-extrabold text-amber-600",
                                        children: c.time
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-4 right-6 w-20 h-12 bg-white/20 rounded-lg blur-[24px]",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, c.key, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 145,
                                columnNumber: 37
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-full bg-gradient-to-r from-purple-600/40 via-purple-500/30 to-rose-400/20 px-8 py-3 text-amber-100 shadow-lg border border-white/10 backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-3",
                                    children: "🌙"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "May your prayers be accepted"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-3",
                                    children: "🌙"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 159,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 122,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 112,
        columnNumber: 10
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
];

//# sourceMappingURL=_bbb388a7._.js.map