
module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define('user', {
		// id: Sequelize.INTERGER,
		username: Sequelize.STRING,
		email: Sequelize.STRING,
		locationId:  Sequelize.INTERGER,
	});
	return model;
};