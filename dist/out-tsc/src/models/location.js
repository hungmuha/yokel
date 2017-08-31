module.exports = function (sequelize, Sequelize) {
    var model = sequelize.define("location", {
        id: Sequelize.INTERGER,
        name: Sequelize.STRING,
        commentId: Sequelize.ARRAY(sequelize.INTERGER),
        userId: Sequelize.ARRAY(sequelize.INTERGER),
    });
    return model;
};
//# sourceMappingURL=location.js.map