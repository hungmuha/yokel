module.exports = function(sequelize, Sequelize){
	var model = sequelize.define("comment", {
		id:{
			type: Sequelize.INTEGER,
			field: 'id',
			allowNull:false,
			primaryKey: true,
			autoIncrement: true
		},
		Content: {
			type: Sequelize.STRING,
			field: 'content',
			allowNull: false
		},
		locationId:{
			type: Sequelize.INTEGER
		},
		userId: {
			type: Sequelize.INTEGER
		}
	});
	return model;
};
