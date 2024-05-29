const server = Bun.serve({
    port: Bun.env.PORT || 3000,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") {
            return new Response("Home Page!");
        }
        if (url.pathname === "/blog") {
            return new Response("Blog!");
        }
        return new Response("Not found", { status: 404 });
    },
});

console.log(`Server running at http://localhost:${server.port}`);