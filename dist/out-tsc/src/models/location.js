module.exports = function (sequelize, Sequelize) {
    var model = sequelize.define("location", {
        id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        commentId: Sequelize.ARRAY(sequelize.INTEGER),
        userId: Sequelize.ARRAY(sequelize.INTEGER),
    });
    return model;
};
//# sourceMappingURL=location.js.map