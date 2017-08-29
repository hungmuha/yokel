module.exports = function(sequelize, Sequelize){
	var model = sequelize.define("location", {
		id:{
			type: Sequelize.INTERGER(11),
			field: 'id',
			allowNull:false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING(64),
			field: 'name',
			allowNull: false
		},
		commentId:{
			type: Sequelize.ARRAY(sequelize.INTERGER)
		},
		userId: {
			type: Sequelize.ARRAY(sequelize.INTERGER)
		}
	},
	tableName: 'location');
	return model;
};