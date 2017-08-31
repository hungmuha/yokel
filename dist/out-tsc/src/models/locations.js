module.exports = function (sequelize, Sequelize) {
    var model = sequelize.define("location", {
        id: {
            type: Sequelize.INTEGER,
            field: 'id',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            field: 'name',
            allowNull: false
        },
        commentId: {
            type: Sequelize.ARRAY(Sequelize.INTEGER)
        },
        userId: {
            type: Sequelize.ARRAY(Sequelize.INTEGER)
        }
    });
    return model;
};
//# sourceMappingURL=locations.js.map