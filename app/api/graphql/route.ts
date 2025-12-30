import { NextRequest } from 'next/server';
import { createYoga } from 'graphql-yoga';
import { schema } from '../../server/schema';

const yoga = createYoga<{
  req: NextRequest;
}>({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Request, Response },
});

export async function GET(request: NextRequest) {
  return yoga.handleRequest(request, { req: request });
}

export async function POST(request: NextRequest) {
  return yoga.handleRequest(request, { req: request });
}
