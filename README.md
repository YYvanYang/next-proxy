# NextProxy

NextProxy is a lightweight, efficient OpenAI API proxy built with Next.js 14+ and its App Router. It provides a seamless way to interact with OpenAI's API while adding useful features like CORS support, error handling, and streaming capabilities.

## Features

- **Easy Integration**: Built on Next.js 14+, making it easy to deploy and integrate with existing Next.js applications.
- **CORS Support**: Automatically handles CORS headers for cross-origin requests.
- **Error Handling**: Robust error handling to manage API and network issues gracefully.
- **Streaming Support**: Capable of handling streaming responses from OpenAI API.
- **Multiple HTTP Methods**: Supports GET, POST, PUT, and DELETE methods.
- **Edge Runtime**: Utilizes Next.js Edge Runtime for improved performance.

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/nextproxy.git
   cd nextproxy
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables:
   Create a `.env.local` file in the root directory and add:
   ```
   OPENAI_API_HOST=https://api.openai.com
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. Your proxy will be available at `http://localhost:3000/api/proxy`

3. To use the proxy, send your OpenAI API requests to `/api/proxy` instead of directly to OpenAI. For example:
   ```javascript
   fetch('http://localhost:3000/api/proxy/v1/chat/completions', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
     },
     body: JSON.stringify({
       model: "gpt-3.5-turbo",
       messages: [{role: "user", content: "Hello!"}]
     })
   })
   ```

## Deployment

Deploy your NextProxy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nextproxy)

Remember to set the `OPENAI_API_HOST` environment variable in your Vercel project settings.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Disclaimer

This project is not officially associated with OpenAI. Please ensure you comply with OpenAI's use-case policy when using this proxy.