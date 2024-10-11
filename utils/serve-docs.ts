import { serveDir, serveFile } from "jsr:@std/http/file-server";
Deno.serve((req: Request) => {
    const pathname = new URL(req.url).pathname;
    if (pathname === "/") {
        return serveFile(req, "docs/index.html");
    }

    if (pathname.startsWith("/")) {
        return serveDir(req, {
            fsRoot: "docs",
            urlRoot: "",
        });
    }

    return new Response("404: Not Found", {
        status: 404,
    });
});
