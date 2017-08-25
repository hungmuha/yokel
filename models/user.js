"user strict";

var Sequelize = require("Sequelize");
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
	var user = sequelize.define('user', {
		id:{
			type: Sequelize.INTERGER,
			field:'id',
			primaryKey: true,
			autoIncrement: true
		},
		username:{
			type: Sequelize.STRING,
			field:'username',
			allowNull:false
		},
		email:{
			type: Sequelize.STRING,
			field:'email',
			allowNull:false
		},
		password:{
			type: Sequelize.STRING,
			field:'password',
			allowNull: false
		},
		locationId:{
			type: Sequelize.INTERGER,
			field: 'locationId',
			allowNull:false
		}
	},
	tableName: 'users';

	User.methods.hash= function(password) {
			return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	};
	User.methods.validPassword= function(password) {
			return bcrypt.compareSync(password,this.user.password);
		}
	}
	});
	return user;
}