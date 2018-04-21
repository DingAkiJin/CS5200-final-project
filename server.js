/**
 * Created by sesha on 6/2/17.
 */

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const session  = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');

app.use(cookieParser());
app.use(session({
  secret: 'this is the secret', //encrypt
  resave: true,
  saveUninitialized: true
}));

// app.use(session({ secret: process.env.SESSION_SECRET }));


// initialize passport after cookie and session have been setup
app.use(passport.initialize());
app.use(passport.session());

/* Mongodb    */
//var connectionString = 'mongodb://127.0.0.1:27017/webappmaker'; // - local mongodb
//var connectionString = 'mongodb://usefname:pwd@ds163181.mlab.com:port/dbname';
//var mongoose = require("mongoose");
//mongoose.connect( connectionString);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist -- For building
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4500"); // when deployed on
  // Heroku, use * instead of 4200 is ok, since server and 4200 are treated as the same domain there
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});



// Get port from environment and store in Express.
const port = '3500' ;
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);


// Server side API
var serverSide = require('./server/app');
serverSide(app);



// For Build: Catch all other routes and return the index file
app.use('*', function (req, res) {
  const index = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(index);
});


var PPORT = process.env.PORT || port;

//Listen on provided port, on all network interfaces.

server.listen(PPORT , () => console.log(`API running on localhost:${port}`)); //-- working on LocalHost
