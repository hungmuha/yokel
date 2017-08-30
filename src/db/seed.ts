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

var commentTest = [
	{
		commentId: 1,
		userId: 1,
		locationId: 1,
		commentField: "the hot springs are great"
	},
	{
		commentId: 2,
		userId: 2,
		locationId: 1,
		commentField: "check out the theater for some awesome things"
	},
	{
		commentId: 3,
		userId: 3,
		locationId: 1,
		commentField: "who doesn't love baseball?"
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
				commentId: comment.id,
				userId: user.id,
				locationId: location,
				commentField: comment
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

var location = function() {
	return DB.Location.bulkCreate(locationTest);
};

var comments = function() {
	return DB.Comments.bulkCreate(commentTest);
};

user();
location();
comments();