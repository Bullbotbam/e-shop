const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
			host: 'localhost',
			dialect: 'mysql',
			port: 3306,
	  });
// const sequelize = process.env.JAWSDB_URL
// 	? new Sequelize(process.env.JAWSDB_URL)
// 	: new Sequelize('ecommerce_db', 'root', 'Fr334m3!', {
// 			host: 'localhost',
// 			dialect: 'mysql',
// 			port: 3306,
// 	  });

module.exports = sequelize;
