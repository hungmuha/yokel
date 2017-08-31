
module.exports = function(sequelize, Sequelize) {

	var model = sequelize.define("user", {
		id:{
			type: Sequelize.INTEGER,
			field:'id',
			primaryKey: true,
			autoIncrement: true,
			allowNull:false
		},
		username:{
			type: Sequelize.STRING,
			field:'username',
			allowNull:false
		},
		locationId:{
			type: Sequelize.INTEGER,
			field: 'locationId',
			allowNull:false
		}

	});
	return model;
};

