#! /bin/bash

function main() {
  until mysqladmin ping -h mysql_container --silent; do
    echo 'waiting for mysqld to be connectable...'
    sleep 2
  done
  service cron start &&
    crontab cron.conf &&
    yarn start
}

main
