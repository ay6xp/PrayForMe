module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:tls [external] (node:tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:tls", () => require("node:tls"));

module.exports = mod;
}),
"[externals]/node:http [external] (node:http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:http", () => require("node:http"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:stream/promises [external] (node:stream/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/promises", () => require("node:stream/promises"));

module.exports = mod;
}),
"[externals]/node:zlib [external] (node:zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:zlib", () => require("node:zlib"));

module.exports = mod;
}),
"[externals]/node:https [external] (node:https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:https", () => require("node:https"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/OneDrive/Documents/Ruby/app/server/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrayerTimes",
    ()=>getPrayerTimes,
    "sendSalams",
    ()=>sendSalams
]);
const sendSalams = ()=>{
    return 'Assalamu Alaikum wa Rahmatullahi wa Barakatuhu!!';
};
const getPrayerTimes = async ({ lat, lon, method = 2, school = 0, date })=>{
    if (lat == null || lon == null) {
        throw new Error(`lat and lon are required. Got lat=${lat}, lon=${lon}`);
    }
    const base = 'https://api.aladhan.com/v1';
    const path = date ? `/timings/${date}` : '/timings';
    const url = new URL(base + path);
    url.searchParams.set('latitude', String(lat));
    url.searchParams.set('longitude', String(lon));
    url.searchParams.set('method', String(method));
    url.searchParams.set('school', String(school));
    const response = await fetch(url.toString());
    if (!response.ok) {
        throw new Error(`Failed to fetch prayer times: ${response.statusText}`);
    }
    const json = await response.json();
    // Aladhan response shape: json.data.timings.Fajr, etc.
    const t = json?.data?.timings;
    if (!t) {
        console.error('Unexpected Aladhan response:', json);
        throw new Error('Unexpected prayer time response from API');
    }
    return {
        fajr: t.Fajr,
        dhuhr: t.Dhuhr,
        asr: t.Asr,
        maghrib: t.Maghrib,
        isha: t.Isha,
        sunrise: t.Sunrise
    };
};
}),
"[project]/OneDrive/Documents/Ruby/app/server/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schema",
    ()=>schema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Ruby$2f$node_modules$2f40$graphql$2d$tools$2f$schema$2f$esm$2f$makeExecutableSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Ruby/node_modules/@graphql-tools/schema/esm/makeExecutableSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Ruby$2f$app$2f$server$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Ruby/app/server/utils.ts [app-route] (ecmascript)");
;
;
const typeDefs = `
    type PrayerTimes {
        fajr: String!
        dhuhr: String!
        asr: String!
        maghrib: String!
        isha: String!
        sunrise: String!
    }

    type Query {
        sendSalams: String!
        getPrayerTimes(lat: Float!, lon: Float!, method: Int, school: Int, date: String): PrayerTimes!
     }
`;
const resolvers = {
    Query: {
        sendSalams: ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Ruby$2f$app$2f$server$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendSalams"])();
        },
        getPrayerTimes: async (_parent, args)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Ruby$2f$app$2f$server$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPrayerTimes"])({
                lat: args.lat,
                lon: args.lon,
                method: args.method,
                school: args.school,
                date: args.date
            });
        }
    }
};
const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Ruby$2f$node_modules$2f40$graphql$2d$tools$2f$schema$2f$esm$2f$makeExecutableSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeExecutableSchema"])({
    typeDefs,
    resolvers
});
}),
"[project]/OneDrive/Documents/Ruby/app/api/graphql/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>yoga,
    "POST",
    ()=>yoga
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Ruby$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Ruby/node_modules/graphql-yoga/esm/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Ruby$2f$app$2f$server$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Ruby/app/server/schema.ts [app-route] (ecmascript)");
;
;
const yoga = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Ruby$2f$node_modules$2f$graphql$2d$yoga$2f$esm$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createYoga"])({
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Ruby$2f$app$2f$server$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schema"],
    graphqlEndpoint: '/api/graphql',
    fetchAPI: {
        Request,
        Response
    }
});
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d344dd4f._.js.map