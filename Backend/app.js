const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "floflo71",
  database: "Groupomania"
});
db.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à Groupomania !");
});

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;