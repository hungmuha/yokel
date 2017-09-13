module.exports = function (sequelize, Sequelize) {
    var model = sequelize.define("comment", {
        comment_field: { type: Sequelize.STRING,
            field: 'comment_field',
            allowNull: false
        }
    });
    return model;
};
//# sourceMappingURL=comments.js.map