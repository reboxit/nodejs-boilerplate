#!/usr/bin/env bash
set -e
docker-compose -f docker-compose.test.yml  build
docker-compose -f docker-compose.test.yml  run --rm api npm run functionaltests:run
docker-compose -f docker-compose.test.yml  down -v