# Jenkins Agent Notes

English: The Jenkins agent should have Node.js, npm, Docker, Docker Compose, curl, and Bash available.

Español: El agente Jenkins debe tener Node.js, npm, Docker, Docker Compose, curl y Bash disponibles.

## Linux checks

Run:

```bash
bash scripts/linux-preflight.sh
```

## Secrets

No real secrets are required. Use demo environment variables only.
