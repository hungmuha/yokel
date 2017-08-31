module.exports = function (sequelize, Sequelize) {
    var model = sequelize.define("comment", {
        id: Sequelize.INTEGER,
        Content: Sequelize.STRING,
        locationId: Sequelize.INTEGER,
        userId: Sequelize.INTEGER,
    });
    return model;
};
//# sourceMappingURL=comments.js.map