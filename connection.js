const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "sql.freedb.tech",
  port: 3306,
  user: "YOUR_DB_USER",
  password: "YOUR_DB_PASSWORD",
  database: "freedb_oC68ngNF"
});

pool.getConnection((err, connection) => {
  if (err) {
    return console.log(err);
  }
  console.log('Database connected successfully');
  connection.release();
});

module.exports = pool;