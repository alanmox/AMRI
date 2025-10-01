const mysql = require('mysql2/promise')

const db =mysql.createPool({
    database: "allanmox",
    user:"root",
    password: null,
    host: "127.0.0.1"
})

module.exports = db