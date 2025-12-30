/**
 * @generated SignedSource<<076241d80e58d82424345c7e5fc90cf9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type pageQuery$variables = {
  date?: string | null | undefined;
  lat: number;
  lon: number;
  method?: number | null | undefined;
  school?: number | null | undefined;
};
export type pageQuery$data = {
  readonly getPrayerTimes: {
    readonly asr: string;
    readonly dhuhr: string;
    readonly fajr: string;
    readonly isha: string;
    readonly maghrib: string;
    readonly sunrise: string;
  };
};
export type pageQuery = {
  response: pageQuery$data;
  variables: pageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "date"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lat"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lon"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "method"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "school"
},
v5 = [
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
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageQuery",
    "selections": (v5/*: any*/)
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
})();

(node as any).hash = "b7b44e95ea052b305d9586233d7c0ec0";

export default node;
