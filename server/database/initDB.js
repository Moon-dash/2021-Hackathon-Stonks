const cryptoJS = require('crypto-js');
const { createConnection, user, transactions }  = require('./DBVariables');

// create the connection
const conn = createConnection();

// connect to the database
conn.connect();

// drop the table if it exists
conn.query(`
    DROP TABLE IF EXISTS ${user};
  `, (err) => {
    if (err) throw (err);

    console.log(`Successfully Dropped ${user} Table!`);
});

// create the table for users
conn.query(`
  CREATE TABLE ${user} (
    UserID INT AUTO_INCREMENT
    ,Username VARCHAR(50)
    ,Password VARCHAR(100)
    ,PRIMARY KEY (UserID)
  );
`, (err) => {
  if (err) throw (err);

  console.log(`Successfully Created ${user} Table!`);
});

// encrypt password
let password = '123';
password = cryptoJS.AES.encrypt(JSON.stringify({ password }), 'secret').toString();

// Insert Sample User for Testing purposes
conn.query(`
  INSERT INTO ${user} VALUES (NULL, "Jon", \"${password}\");
`, (err) => {
  if (err) throw err;

  console.log('Successfully Added Sample User!');
});

// close the connection
conn.end();
