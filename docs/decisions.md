# Decisions

## Keep service small

The service is intentionally small because this repository is about delivery engineering, not application complexity.

## Use Jenkinsfile as the main artifact

The Jenkinsfile is the primary demonstration of CI/CD experience. It shows quality gates, Docker build, smoke test, and failure handling.

## Simulated rollback

Rollback is simulated to keep the repository safe and publishable while still showing operational intent.

## No real registry

The image is built locally. No private registry URLs or credentials are included.
