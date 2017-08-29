import * as Sequelize from 'sequelize';

var sequelize = new Sequelize('postgres://hungmuhamath@localhost:5432/yokel');

var User = sequelize.import('./user');
var Comment = sequelize.import('./comment');
var Location = sequelize.import('./location');

User.hasMany(Comment);
Comment.belongTo(Location);
Location.hasMany(Comment);
Location.hasMany(User);

const db = <any>{};
db.models = {
	User,
	Location,
	Comment
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export{db};