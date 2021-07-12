#! /bin/bash

function main() {
  service cron start &&
    crontab cron.conf &&
    yarn start
}

main
