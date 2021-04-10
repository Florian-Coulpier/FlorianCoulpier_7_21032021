const Sequelize = require ("sequelize");
const db = require("../sequelizeconfig");

const User = db.sequelize.define('user', {
  userID: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  nom: {type: Sequelize.STRING(255), allowNull: false, },
  email: {type: Sequelize.STRING(255), allowNull: false, unique: true},
  prenom: {type: Sequelize.STRING(255), allowNull: false, },
  password: {type: Sequelize.STRING(255), allowNull: false, },
  bio: {type: Sequelize.STRING(255), allowNull: true, },
  avatarUrl: {type: Sequelize.STRING(255), allowNull: true, },
  dateCreation: {type: Sequelize.DATE, allowNull: true, defaultValue: new Date(), },
},
//      {tableName: 'User', timestamps: false, underscored: true}
);
exports.User = User;