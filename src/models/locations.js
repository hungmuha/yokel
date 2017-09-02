
module.exports = function(sequelize, Sequelize){
	var model = sequelize.define("location", {

		location_id:{
			type: Sequelize.INTEGER,
			field: 'location_id',
			allowNull:false,
			primaryKey: true,
			autoIncrement: true
		},
		city: {
			type: Sequelize.STRING,
			field: 'city',
			allowNull: false
		},
		state: {
			type: Sequelize.STRING,
			field: 'state',
			allowNull: false
		},
		commentId:{
			type: Sequelize.ARRAY(Sequelize.INTEGER)
		},
		userId: {
			type: Sequelize.ARRAY(Sequelize.INTEGER)
		}

	});
	return model;
};
