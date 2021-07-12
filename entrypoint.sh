#! /bin/bash

function main() {
  service cron start &&
    crontab cron.conf &&
    npm run start
}

main
