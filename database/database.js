const sequelize = require('sequelize');
const connection = new sequelize('myusers', 'root', '12345',{
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = connection;