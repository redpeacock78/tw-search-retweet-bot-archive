#! /bin/bash

function main() {
  # MySQLが立ち上がるまで待つ処理
  echo 'waiting for mysqld to be connectable...' &&
    until mysqladmin ping -h mysql_container --silent; do
      sleep 10
    done &&
    echo 'connected!' &&
    {
      # メイン
      service cron start &&
        crontab cron.conf &&
        yarn start
    }
}

main
