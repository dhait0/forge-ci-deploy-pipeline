# Architecture

Forge CI Deploy Pipeline models a release path for a small TypeScript service.

## Components

- `src/`: mock service with `/health` and `/release` endpoints.
- `Jenkinsfile`: declarative CI/CD pipeline.
- `Dockerfile`: multi-stage image build.
- `docker-compose.yml`: local smoke-test environment.
- `scripts/`: Linux preflight, smoke test, and rollback scripts.

## Pipeline stages

- checkout
- install
- lint
- build
- test
- Docker image build
- Docker Compose smoke test
- rollback on failure
