module.exports = function (sequelize, Sequelize) {
    var model = sequelize.define("user", {
        user_id: {
            type: Sequelize.INTEGER,
            field: 'user_id',
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            field: 'username',
            allowNull: false
        },
        location_Id: {
            type: Sequelize.INTEGER,
            field: 'location_Id',
            allowNull: false
        }
    });
    return model;
};
//# sourceMappingURL=users.js.map