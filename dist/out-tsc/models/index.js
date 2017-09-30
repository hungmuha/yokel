"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    var sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        logging: true //false
    });
}
else {
    var sequelize = new Sequelize('postgres://hungmuhamath@localhost:5432/yokel');
}
var User = sequelize.import('./users');
var Comment = sequelize.import('./comments');
var Location = sequelize.import('./locations');
User.hasMany(Comment);
Comment.belongsTo(User);
Comment.belongsTo(Location);
Location.hasMany(Comment);
// Location.hasMany(User);
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