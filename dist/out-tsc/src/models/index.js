"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var sequelize = new Sequelize('postgres://hungmuhamath@localhost:5432/yokel');
var User = sequelize.import('./user');
var Comment = sequelize.import('./comments');
var Location = sequelize.import('./location');
User.hasMany(Comment);
Comment.belongsTo(Location);
Location.hasMany(Comment);
Location.hasMany(User);
var db = {};
exports.db = db;
db.models = {
    User: User,
    Location: Location,
    Comment: Comment
};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//# sourceMappingURL=index.js.map