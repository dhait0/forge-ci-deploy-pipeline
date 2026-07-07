# Project

Forge CI Deploy Pipeline / Pipeline de despliegue Forge

## Overview

English: Forge CI Deploy Pipeline is a bilingual Jenkins, Docker, and Linux demo for building, testing, packaging, smoke testing, and rolling back a mock TypeScript service.

Español: Forge CI Deploy Pipeline es un demo bilingue de Jenkins, Docker y Linux para construir, probar, empaquetar, validar y simular rollback de un servicio TypeScript.

## Features

- English: Jenkins declarative pipeline / Español: Pipeline declarativo de Jenkins
- English: Docker multi-stage build / Español: Build Docker multi-stage
- English: Docker Compose smoke test / Español: Smoke test con Docker Compose
- English: Linux preflight script / Español: Script de preflight Linux
- English: Rollback simulation / Español: Simulacion de rollback
- English: TypeScript service with health endpoints / Español: Servicio TypeScript con endpoints de salud

## Architecture

English: The repo contains a small TypeScript HTTP service, Docker packaging, Jenkins stages, Linux operational scripts, and bilingual documentation.

Español: El repo contiene un servicio HTTP TypeScript pequeno, empaquetado Docker, etapas Jenkins, scripts operativos Linux y documentacion bilingue.

## Tech Stack

- Node.js
- TypeScript
- Jenkins
- Docker
- Docker Compose
- Linux Bash
- ESLint
- Prettier
- Husky

## Installation

```bash
npm install
```

## Running locally

```bash
npm run build
npm run start
```

English: Service runs at `http://localhost:4020`.

Español: El servicio corre en `http://localhost:4020`.

## Folder structure

```text
src/
scripts/
infra/
docs/
public/
test/
Jenkinsfile
Dockerfile
docker-compose.yml
README.md
AGENTS.md
package.json
```

## Screenshots

- [Pipeline preview](public/screenshots/forge-ci-deploy-pipeline.svg)

## Why this project exists

English: This project demonstrates CI/CD delivery judgment, Linux operational checks, Docker packaging, and rollback planning for enterprise-style deployments.

Español: Este proyecto demuestra criterio CI/CD, validaciones Linux, empaquetado Docker y plan de rollback para despliegues enterprise.

## License

MIT
