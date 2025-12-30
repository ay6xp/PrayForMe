'use client';

import {
    Environment,
    Network,
    RecordSource,
    Store,
    FetchFunction,
} from 'relay-runtime';

const fetchQuery: FetchFunction = async (operation, variables) => {
    const response = await fetch('/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    });
    return response.json();
};

export const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});