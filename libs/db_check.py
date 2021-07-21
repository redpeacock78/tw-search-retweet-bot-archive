import mysql.connector as mydb

conn = mydb.connect(
    host='mysql_container',
    port='3306',
    user='docker',
    password='docker',
    database='my_db'
)

conn.is_connected()
