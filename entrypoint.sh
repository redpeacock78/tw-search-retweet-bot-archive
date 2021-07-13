#! /bin/bash

function main() {
  echo 'waiting for mysqld to be connectable...'
  until mysqladmin ping -h mysql_container --silent; do
    sleep 120
  done
  echo 'connected!'
  service cron start &&
    crontab cron.conf &&
    yarn start
}

main
