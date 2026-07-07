export type ReleaseHealth = {
  service: string;
  status: "ok";
  version: string;
  target: string;
  bilingual: {
    en: string;
    es: string;
  };
};

export function buildReleaseHealth(env: NodeJS.ProcessEnv): ReleaseHealth {
  return {
    service: "forge-ci-deploy-pipeline",
    status: "ok",
    version: env.RELEASE_VERSION ?? "demo-2026.07",
    target: env.DEPLOY_TARGET ?? "local-linux",
    bilingual: {
      en: "Mock CI/CD deployment target is healthy.",
      es: "Destino demo de CI/CD saludable.",
    },
  };
}
