// import required packages
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.send({
    message: 'API is Working Properly'
  });
});

module.exports = router;
