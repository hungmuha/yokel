module.exports = function (sequelize, Sequelize) {
    var model = sequelize.define("comment", {
        comment_id: {
            type: Sequelize.INTEGER,
            field: 'comment_id',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_field: {
            type: Sequelize.STRING,
            field: 'comment_field',
            allowNull: false
        },
        location_id: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    });
    return model;
};
//# sourceMappingURL=comments.js.map