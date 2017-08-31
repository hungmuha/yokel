module.exports = function (sequelize, Sequelize) {
    var model = sequelize.define("comment", {
        id: Sequelize.INTERGER,
        Content: Sequelize.STRING,
        locationId: Sequelize.INTERGER,
        userId: Sequelize.INTERGER,
    });
    return model;
};
//# sourceMappingURL=comments.js.map