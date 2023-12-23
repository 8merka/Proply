const pgp = require('pg').Pool
const db = new pgp({
    user: 'postgres',
    password: '9100',
    host: 'localhost',
    port: 5432,
    database: 'ProplyDB'
});

module.exports = db