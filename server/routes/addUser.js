// import required packages and modules
const express = require('express');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const { getAllUsers, addUser } = require('../database/asyncQueries');

// use the express router
const router = express.Router();

// router middlewares
router.use(express.urlencoded({
  extended: true
}));
router.use(express.json());

router.post('/', (req, res) => {
  const username = req.body.username;
  let password = req.body.password;

  if (!username || !password) {
    res.send({ errMsg: 'Invalid Username and/or Password!' });
    return;
  }

  // encrypt password
  password = cryptoJS.AES.encrypt(JSON.stringify({ password }), 'secret').toString();

  getAllUsers().then((users) => {
    for (let user of users) {
      if (username === user.Username) {
        res.send({ errMsg: 'Username Already Exists' });
        return;
      }
    }

    addUser(username, password).then(() => {

      res.send({ msg: 'User Added Successfully!' });
      return;
    }).catch((err) => {
      console.log(err);
      res.send({ errMsg: 'Error Adding User!' });
    });

  }).catch((err) => {
    console.log(err);
    res.send({ errMsg: 'Error Adding User!' });
  });
});

module.exports = router;
