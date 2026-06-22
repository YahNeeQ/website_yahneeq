const port = Number.parseInt(process.env.PORT ?? "3000", 10);

if (!Number.isInteger(port) || port < 1024 || port > 65535) {
  throw new Error("PORT must be an integer between 1024 and 65535");
}

const { default: application } = await import("./dist/server/server.js");

const server = Bun.serve({
  hostname: "127.0.0.1",
  port,
  idleTimeout: 10,
  maxRequestBodySize: 1_000_000,
  fetch(request) {
    return application.fetch(request, undefined, undefined);
  },
  error(error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  },
});

console.log(`YahNeeQ production server: http://${server.hostname}:${server.port}`);
