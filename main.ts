import * as http from "@std/http";

Deno.serve((req) => {
  const pathname = new URL(req.url).pathname;
  if (pathname.startsWith("/Modules") || pathname.startsWith("/Ruleset") || pathname.startsWith("/Script")) {
    return http.serveDir(req);
  }

  return new Response(`${new Date().toString()}`);
});
