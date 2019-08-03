#!/usr/bin/env bash
set -euo pipefail

node reader.js $(ls images/* | sort)
