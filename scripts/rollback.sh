#!/usr/bin/env bash
set -euo pipefail

RELEASE_VERSION="${RELEASE_VERSION:-demo-previous}"
DEPLOY_TARGET="${DEPLOY_TARGET:-local-linux}"

echo "Rolling back ${DEPLOY_TARGET} to ${RELEASE_VERSION}"
echo "Rollback is simulated for portfolio safety."
