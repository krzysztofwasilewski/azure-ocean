#!/usr/bin/env bash
# Renders the social preview image and PNG icons with headless Chrome (macOS).
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
shot() { "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --virtual-time-budget=2000 --window-size="$2" --screenshot="$3" "file://$PWD/$1" >/dev/null 2>&1; }
shot scripts/og.html 1200,630 public/og.png
shot scripts/icon.html 180,180 public/apple-touch-icon.png
sips -z 32 32 public/apple-touch-icon.png --out public/favicon-32.png >/dev/null
echo "Wrote public/og.png, public/apple-touch-icon.png, public/favicon-32.png"
