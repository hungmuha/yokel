
module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define('user', {
		id: Sequelize.INTEGER,
		username: Sequelize.STRING,
		email: Sequelize.STRING,
		locationId:  Sequelize.INTEGER,
	});
	return model;
};