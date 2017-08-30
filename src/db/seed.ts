import { db } from '../models';
let DB = db.models;

var locationTest = [
	{
		locationId: 1,
		city: "Denver",
		state: "Colorado"
	},
	{
		locationId: 2,
		city: "Aspen",
		state: "Colorado",
	},
	{
		locationId: 3,
		city: "Portland",
		state: "Oregon",
	}
];

var commentsTest = [
	{
		commentsId: 1,
		userId: 1,
		locationId: 1,
		commentsField: "the hot springs are great"
	},
	{
		commentsId: 2,
		userId: 2,
		locationId: 1,
		commentsField: "check out the theater for some awesome things"
	},
	{
		commentsId: 3,
		userId: 3,
		locationId: 1,
		commentsField: "who doesn't love baseball?"
	}
];

var userCreate = function() {
	return DB.User.create({
			email:"user",
			password:"1234"
	})
	.then(function(user){
		DB.Location.bulkCreate(locationTest)
		.then(function(location){
			DB.Comments.create({
				commentsId: comments.id,
				userId: user.id,
				locationId: location,
				commentsField: comments
			})
		});
	})
}

var user = function() {
	return DB.User.create({
			email:"user",
			password:"1234"
	})
}

//test/

var location = function() {
	return DB.Location.bulkCreate(locationTest);
};

var comments = function() {
	return DB.Comments.bulkCreate(commentsTest);
};

user();
location();
comments();

//yes much change much happening
//come on!!!!!!!!!