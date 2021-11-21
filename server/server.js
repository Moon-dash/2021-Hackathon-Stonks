// import required packages
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// import routes
const testAPIRoute = require('./routes/testAPI');
const addUser = require('./routes/addUser');
const authenticateUser = require('./routes/authenticateUser');

// create the server object
const app = express();

// specify port number
const port = 5000;

// Middlewares
app.use(cors());
app.use(cookieParser());

// connect the app to the routes
app.use('/', testAPIRoute);
app.use('/add-user', addUser);
app.use('/authenticate-user', authenticateUser);

// app listing on the specified port
app.listen(port);
console.log('Server started at http://localhost:' + port);
