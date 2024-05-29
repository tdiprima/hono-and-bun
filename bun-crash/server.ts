// Basic server example
const server = Bun.serve({
    // port: process.env.PORT || 3000,
    port: Bun.env.PORT || 3000,
    fetch(req) {
        return new Response("Hello, world!");
    },
});

console.log(`Server running at http://localhost:${server.port}`);