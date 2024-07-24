import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">Welcome to NextProxy</h1>
      <p className="mb-4 dark:text-gray-300">
        NextProxy is a lightweight, efficient OpenAI API proxy built with Next.js 14+ and its App Router.
      </p>
      <h2 className="text-2xl font-semibold mb-2 dark:text-gray-200">How to Use</h2>
      <p className="mb-4 dark:text-gray-300">
        To use NextProxy, send your OpenAI API requests to <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">
        /api/proxy</code> instead of directly to OpenAI.
      </p>
      <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">Example:</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto dark:text-gray-300">
        {`fetch('/api/proxy/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Hello!"}]
  })
})`}
      </pre>
      <h2 className="text-2xl font-semibold mt-8 mb-2 dark:text-gray-200">Features</h2>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>Easy Integration with Next.js</li>
        <li>CORS Support</li>
        <li>Error Handling</li>
        <li>Streaming Support</li>
        <li>Multiple HTTP Methods</li>
        <li>Edge Runtime</li>
      </ul>
      <footer className="mt-8 text-center text-gray-500 dark:text-gray-400">
        <p>NextProxy is not officially associated with OpenAI. Use responsibly and in compliance with OpenAI's policies.</p>
      </footer>
    </div>
  );
}