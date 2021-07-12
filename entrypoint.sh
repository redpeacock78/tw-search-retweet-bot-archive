#! /bin/bash

function main() {
  crontab cron.conf &&
    yarn start
}

main
