#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUN_BIN="${BUN_BIN:-${HOME}/.bun/bin/bun}"

if ! command -v "${BUN_BIN}" >/dev/null 2>&1; then
  echo "Bun not found. Install with: curl -fsSL https://bun.sh/install | bash"
  exit 1
fi

cd "${ROOT}"

echo "[devmochi] Installing deps (bun install)..."
"${BUN_BIN}" install >/dev/null

CFG_DIR="${HOME}/.devmochi"
CFG_FILE="${CFG_DIR}/config.json"
USER_ID="${BUDDY_USER_ID:-$(whoami)}"

mkdir -p "${CFG_DIR}"
if [ ! -f "${CFG_FILE}" ]; then
  printf '{\"userID\":\"%s\"}\n' "${USER_ID}" > "${CFG_FILE}"
  echo "[devmochi] Created ${CFG_FILE} with userID=${USER_ID}"
fi

echo "[devmochi] Running demo..."
"${BUN_BIN}" src/demo.tsx
