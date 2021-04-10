var Sequelize = require('sequelize');
const db = {};
var sequelize = new Sequelize('Groupomania', 'root', 'floflo71', {
host: 'localhost',
dialect: 'mysql',
logging: false,
});

db.sequelize = sequelize;
module.exports = db;