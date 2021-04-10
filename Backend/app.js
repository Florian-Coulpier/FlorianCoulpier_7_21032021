const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
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

app.use(cors());

app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;