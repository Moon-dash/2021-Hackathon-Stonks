const mysql = require('mysql');

// function to create a db connection
function createConnection() {
  const connection = mysql.createConnection({
    host: '0.0.0.0',
    user: 'root',
    password: 'password',
    database: 'stonks'
  });

  return connection;
}

module.exports = createConnection;
