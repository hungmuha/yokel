"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var DB = models_1.db.models;
var locationTest = [
    {
        Id: 1,
        city: "Denver",
        state: "Colorado"
    },
    {
        Id: 2,
        city: "Aspen",
        state: "Colorado",
    },
    {
        Id: 3,
        city: "Portland",
        state: "Oregon",
    }
];
var commentsTest = [
    {
        Id: 1,
        userId: 1,
        locationId: 1,
        comment_field: "the hot springs are great"
    },
    {
        Id: 2,
        userId: 1,
        locationId: 1,
        comment_field: "check out the theater for some awesome things"
    },
    {
        Id: 3,
        userId: 1,
        locationId: 1,
        comment_field: "who doesn't love baseball?"
    }
];
// var userCreate = function() {
// 	return DB.User.create({
// 			email:"user",
// 			password:"1234"
// 	})
// 	.then(function(user){
// 		DB.Location.bulkCreate(locationTest)
// 		.then(function(location){
// 			DB.Comments.create({
// 				commentsId: comments,
// 				userId: user.id,
// 				locationId: location,
// 				commentsField: comments
// 			})
// 		});
// 	})
// }
var user = function () {
    return DB.User.create({
        id: "1",
        username: "hung"
    });
};
//test/
var location = function () {
    return DB.Location.bulkCreate(locationTest);
};
var comments = function () {
    return DB.Comment.bulkCreate(commentsTest);
};
user()
    .then(location)
    .then(comments)
    .then(function () {
    process.exit();
});
//# sourceMappingURL=seed.js.map