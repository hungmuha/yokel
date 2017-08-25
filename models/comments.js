module.exports = function(sequelize, Sequelize){
	var comment = sequelize.define("comment", {
		id:{
			type: Sequelize.INTERGER(11),
			field: 'id',
			allowNull:false,
			primaryKey: true,
			autoIncrement: true
		},
		Content: {
			type: Sequelize.STRING(100),
			field: 'content',
			allowNull: false
		},
		locationId:{
			type: sequelize.INTERGER(10)
		},
		userId: {
			type: sequelize.INTERGER(10)
		}
	},
	tableName: 'location');
	return location;

}