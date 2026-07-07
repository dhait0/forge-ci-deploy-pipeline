#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:4020}"

echo "Checking release health at ${BASE_URL}/health"
curl --fail --silent "${BASE_URL}/health" | grep --quiet '"status":"ok"'

echo "Checking release metadata at ${BASE_URL}/release"
curl --fail --silent "${BASE_URL}/release" | grep --quiet '"pipeline":"jenkins"'

echo "Smoke test passed"
