import mysql from 'mysql2/promise.js'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'admin',
  database: 'busapp'
}

const connectionString = process.env.DATABASE_URL || DEFAULT_CONFIG

const connection = await mysql.createConnection(connectionString)

export default connection
