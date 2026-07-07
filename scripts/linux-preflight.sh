#!/usr/bin/env bash
set -euo pipefail

required_commands=(node npm docker curl)

for command_name in "${required_commands[@]}"; do
  if ! command -v "${command_name}" >/dev/null 2>&1; then
    echo "Missing required command: ${command_name}" >&2
    exit 1
  fi
done

echo "Linux preflight passed"
