const { createConnection, user, transactions } = require('./DBVariables');
const util = require('util');

// function to get all users
async function getAllUsers() {
  // db connection stuff
  const conn = createConnection();
  conn.connect();

  // make the query into a promise
  const query = util.promisify(conn.query).bind(conn);

  let users;

  try {
    users = await query(`SELECT * FROM ${user}`);
  } catch(err) {
    throw err;
  } finally {
    // close connection
    conn.end();

    return users;
  }
}

// function to insert user
async function addUser(username, password) {
  // db connection stuff
  const conn = createConnection();
  conn.connect();

  // make the query into a promise
  const query = util.promisify(conn.query).bind(conn);

  try {
    await query(`INSERT INTO ${user} VALUES (NULL, "${username}", "${password}")`);
  } catch(err) {
    throw err;
  } finally {
    // close connection
    conn.end();

    return;
  }
}

// function to insert transaction
async function addTransaction(UserID, coin, isSelling, isBuying) {
  // db connection stuff
  const conn = createConnection();
  conn.connect();

  // make the query into a promise
  const query = util.promisify(conn.query).bind(conn);

  try {
    await query(`INSERT INTO ${transactions} VALUES (NULL, ${UserID}, "${coin}", ${isSelling}, ${isBuying})`);
  } catch(err) {
    throw err;
  } finally {
    // close connection
    conn.end();

    return;
  }
}

module.exports = {
  getAllUsers: getAllUsers,
  addUser: addUser,
  addTransaction: addTransaction
}
