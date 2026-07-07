import { createServer } from "node:http";
import { buildReleaseHealth } from "./release.js";

const port = Number(process.env.PORT ?? 4020);

const server = createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(buildReleaseHealth(process.env)));
    return;
  }

  if (request.url === "/release") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(
      JSON.stringify({
        pipeline: "jenkins",
        strategy: "blue-green mock",
        approvals: ["lint", "test", "build", "smoke"],
      }),
    );
    return;
  }

  response.writeHead(404, { "content-type": "application/json" });
  response.end(JSON.stringify({ error: "not_found" }));
});

server.listen(port, () => {
  console.log(`forge-ci-deploy-pipeline listening on ${port}`);
});
