const sequelize = require('sequelize');
const connection = require('./database.js');

const User = connection.define('user', {
	username:{
		type: sequelize.STRING,
		allowNull: false
	},

	password:{
		type: sequelize.STRING,
		allowNull: false
	}
});

User.sync({force:false});
module.exports = User;