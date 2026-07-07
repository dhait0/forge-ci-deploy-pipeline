import assert from "node:assert/strict";
import test from "node:test";
import { buildReleaseHealth } from "../dist/release.js";

test("buildReleaseHealth returns bilingual release metadata", () => {
  const health = buildReleaseHealth({
    RELEASE_VERSION: "demo-test",
    DEPLOY_TARGET: "linux-runner",
  });

  assert.equal(health.status, "ok");
  assert.equal(health.version, "demo-test");
  assert.equal(health.target, "linux-runner");
  assert.equal(health.bilingual.es, "Destino demo de CI/CD saludable.");
});
