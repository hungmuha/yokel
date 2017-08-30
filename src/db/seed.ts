import { db } from '../models';
let DB = db.models;

var locationDummy = [
	{
		name: "burger shack",
		url: "www.b.com",
		address: "123 b st"
	},
	{
		name: "taco truck",
		url: "www.t.com",
		address: "456 t dr"
	},
	{
		name: "mcbangers",
		url: "www.m.com",
		address: "789 m ave"
	},
	{
		name: "asdf",
		url: "www.asdf.com",
		address: "asd m ave"
	}
];

var commentDummy = [
	{
		userId: 1,
		locationId: 1,
		likes: 3,
		trigger: false,
		favorite: false
	},
	{
		userId: 1,
		locationId: 2,
		likes: 3,
		trigger: false,
		favorite: false
	},
	{
		userId: 1,
		locationId: 3,
		likes: 5,
		trigger: true,
		favorite: true
	}
];

var userCreate = function() {
	return DB.User.create({
			email:"user",
			password:"1234"
	})
	.then(function(user){
		DB.Location.bulkCreate(locationDummy)
		.then(function(location){
			DB.Comments.create({
				userId: user.id,
				locationId: location,
				likes: 2,
				trigger: false
			})
		});
	})
}

// userCreate()
// .then(function() {
// 	process.exit();
// });

var rest = function() {
	return DB.Location.bulkCreate(locationDummy);
};
var user = function() {
	return DB.User.create({
			email:"user",
			password:"1234"
	})
}

var comments = function() {
	return DB.Comments.bulkCreate(commentDummy)
}
rest();
user();
comments();