import * as Sequelize from 'sequelize';

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  var sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  });
} else{ 
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

const db = <any>{};
db.models = {
	User,
	Location,
	Comment
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export{db};