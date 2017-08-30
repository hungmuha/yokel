"user strict";
var Sequelize = require("Sequelize");
module.exports = function (sequelize, DataTypes) {
    var model = sequelize.define('user', {
        id: {
            type: Sequelize.INTERGER,
            field: 'id',
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            field: 'username',
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            field: 'email',
            allowNull: false
        },
        locationId: {
            type: Sequelize.INTERGER,
            field: 'locationId',
            allowNull: false
        }
    });
    return model;
};
//# sourceMappingURL=user.js.map