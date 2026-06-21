import { join } from "node:path";

const outputDirectory = join(import.meta.dir, "dist");

const server = Bun.serve({
  hostname: "localhost",
  port: 3333,
  async fetch(request) {
    const pathname = decodeURIComponent(new URL(request.url).pathname);
    const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);

    if (relativePath.includes("..")) {
      return new Response("Invalid path", { status: 400 });
    }

    const asset = Bun.file(join(outputDirectory, relativePath));
    if (await asset.exists()) return new Response(asset);

    return new Response(Bun.file(join(outputDirectory, "index.html")));
  },
});

console.log(`YahNeeQ Content Studio: http://${server.hostname}:${server.port}`);
