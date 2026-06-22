import { resolve, sep } from "node:path";

const port = Number.parseInt(process.env.PORT ?? "3000", 10);

if (!Number.isInteger(port) || port < 1024 || port > 65535) {
  throw new Error("PORT must be an integer between 1024 and 65535");
}

const { default: application } = await import("./dist/server/server.js");
const assetsRoot = resolve(import.meta.dir, "dist", "client", "assets");

async function serveAsset(request: Request) {
  if (!["GET", "HEAD"].includes(request.method)) return null;

  const pathname = new URL(request.url).pathname;
  if (!pathname.startsWith("/assets/")) return null;

  let assetName: string;
  try {
    assetName = decodeURIComponent(pathname.slice("/assets/".length));
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  const assetPath = resolve(assetsRoot, assetName);
  if (!assetPath.startsWith(`${assetsRoot}${sep}`)) {
    return new Response("Not Found", { status: 404 });
  }

  const file = Bun.file(assetPath);
  if (!(await file.exists())) return null;

  const headers = {
    "Cache-Control": "public, max-age=31536000, immutable",
    "Content-Length": String(file.size),
    "Content-Type": file.type || "application/octet-stream",
    "Cross-Origin-Resource-Policy": "same-origin",
    "X-Content-Type-Options": "nosniff",
  };

  return new Response(request.method === "HEAD" ? null : file, { headers });
}

const server = Bun.serve({
  hostname: "127.0.0.1",
  port,
  idleTimeout: 10,
  maxRequestBodySize: 1_000_000,
  async fetch(request) {
    const assetResponse = await serveAsset(request);
    if (assetResponse) return assetResponse;

    return application.fetch(request, undefined, undefined);
  },
  error(error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  },
});

console.log(`YahNeeQ production server: http://${server.hostname}:${server.port}`);
