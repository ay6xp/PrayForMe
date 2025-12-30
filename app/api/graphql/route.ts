import {NextRequest} from 'next/server';
import {createYoga} from 'graphql-yoga';
import {schema} from '../../server/schema';

const yoga = createYoga<{
    req: NextRequest;}>({
    schema,
    graphqlEndpoint: '/api/graphql',
    fetchAPI: {Request, Response},
    });

export {yoga as GET, yoga as POST};
