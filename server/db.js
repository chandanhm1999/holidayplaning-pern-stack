const Pool = require('pg').Pool


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todoapp', // Replace with your database name
    password: 'system',
    port: 5432
})

module.exports = pool