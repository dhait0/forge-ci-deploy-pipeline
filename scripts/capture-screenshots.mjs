import { mkdir, writeFile } from "node:fs/promises";

const outputDir = new URL("../public/screenshots/", import.meta.url);
const outputFile = new URL("./forge-ci-deploy-pipeline.svg", outputDir);

const stages = [
  ["Checkout", "Git source / Codigo"],
  ["Install", "npm ci"],
  ["Quality", "lint + build"],
  ["Test", "node --test"],
  ["Image", "docker build"],
  ["Smoke", "compose + curl"],
  ["Rollback", "failure path"],
];

function stageCards() {
  return stages
    .map((stage, index) => {
      const x = 52 + (index % 4) * 318;
      const y = 300 + Math.floor(index / 4) * 188;
      return `
        <g transform="translate(${x}, ${y})">
          <rect width="282" height="134" rx="6" fill="#111827" stroke="#334155" />
          <text x="22" y="42" fill="#67e8f9" font-size="13" font-weight="800" letter-spacing="2">${String(index + 1).padStart(2, "0")}</text>
          <text x="22" y="78" fill="#f8fafc" font-size="28" font-weight="900">${stage[0]}</text>
          <text x="22" y="108" fill="#94a3b8" font-size="15">${stage[1]}</text>
        </g>`;
    })
    .join("");
}

const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="920" viewBox="0 0 1400 920">
    <defs>
      <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
        <path d="M36 0 L0 0 0 36" fill="none" stroke="rgba(148,163,184,0.12)" />
      </pattern>
    </defs>
    <rect width="1400" height="920" fill="#020617" />
    <rect width="1400" height="920" fill="url(#grid)" />

    <text x="52" y="74" fill="#67e8f9" font-size="13" font-weight="900" letter-spacing="3">FORGE CI DEPLOY PIPELINE / PIPELINE DE DESPLIEGUE FORGE</text>
    <text x="52" y="144" fill="#f8fafc" font-size="62" font-weight="900">Jenkins + Docker + Linux</text>
    <text x="52" y="188" fill="#94a3b8" font-size="20">Build, test, package, smoke test, and rollback / Construir, probar, empaquetar, validar y revertir</text>

    <rect x="52" y="232" width="1296" height="2" fill="#334155" />
    ${stageCards()}

    <g transform="translate(52, 710)">
      <rect width="1296" height="142" rx="8" fill="#ecfeff" />
      <text x="28" y="44" fill="#0f172a" font-size="15" font-weight="900" letter-spacing="2">OPERATIONS CONTRACT / CONTRATO OPERATIVO</text>
      <text x="28" y="88" fill="#0f172a" font-size="30" font-weight="900">No real secrets. No private registries. Demo-safe Linux commands.</text>
      <text x="28" y="120" fill="#475569" font-size="18">Sin secretos reales. Sin registros privados. Comandos Linux seguros para demo.</text>
    </g>
  </svg>`;

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, svg.trim());
