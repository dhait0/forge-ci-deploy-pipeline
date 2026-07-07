# Implementation

The service uses Node.js built-in HTTP APIs and strict TypeScript so the repository stays focused on delivery operations.

## Jenkins

The `Jenkinsfile` uses a declarative pipeline with parallel quality gates, Docker image creation, smoke testing, and rollback on failure.

## Linux

`scripts/linux-preflight.sh` validates that expected tools exist on a Linux runner.

## Docker

Docker uses a multi-stage build to separate dependency installation, TypeScript compilation, and runtime execution.
