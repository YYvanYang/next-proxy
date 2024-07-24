import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_HOST = process.env.OPENAI_API_HOST || 'https://api.openai.com';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function pickHeaders(headers: Headers, keys: (string | RegExp)[]): Headers {
  const picked = new Headers();
  for (const [key, value] of headers.entries()) {
    if (keys.some((k) => (typeof k === 'string' ? k === key.toLowerCase() : k.test(key)))) {
      picked.set(key, value);
    }
  }
  return picked;
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: CORS_HEADERS });
}

export async function GET(request: NextRequest) {
  return handleRequest(request);
}

export async function POST(request: NextRequest) {
  return handleRequest(request);
}

export async function PUT(request: NextRequest) {
  return handleRequest(request);
}

export async function DELETE(request: NextRequest) {
  return handleRequest(request);
}

async function handleRequest(request: NextRequest) {
  try {
    const url = new URL(request.url);
    url.host = new URL(OPENAI_API_HOST).host;

    const headers = pickHeaders(request.headers, ['content-type', 'authorization']);

    const response = await fetch(url, {
      headers,
      method: request.method,
      body: request.body,
    });

    if (!response.ok) {
      throw new Error(`OpenAI API responded with status ${response.status}`);
    }

    const responseHeaders = {
      ...CORS_HEADERS,
      ...Object.fromEntries(
        pickHeaders(response.headers, ['content-type', /^x-ratelimit-/, /^openai-/])
      ),
    };

    const isStreamed = response.headers.get('content-type')?.includes('text/event-stream');

    if (isStreamed) {
      const transformStream = new TransformStream({
        transform(chunk, controller) {
          // Here you can modify the chunk if needed
          controller.enqueue(chunk);
        },
      });

      return new NextResponse(response.body?.pipeThrough(transformStream), {
        headers: responseHeaders,
        status: response.status,
      });
    } else {
      return new NextResponse(response.body, {
        headers: responseHeaders,
        status: response.status,
      });
    }
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

export const config = {
  runtime: 'edge',
};