#! /bin/bash

function main() {
  service cron start &&
    crontab cron.conf &&
    node dist/main.js
}

main
