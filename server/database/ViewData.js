const { createConnection, user } = require('./DBVariables');

const conn = createConnection();

conn.connect();

conn.query(`SELECT * FROM ${user}`, (err, rows) => {
  if (err) throw err;

  console.log(`Data from ${user} Table: `);
  for (let r of rows) {
    console.log(r);
  }
});

conn.end();
