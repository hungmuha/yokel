// var passport = require("passport");
// import { db } from '../models';
// var Comment = db.models.Comment;
// var Location = db.models.Location;
// var User = db.models.User;

// // POST /signup
// function postSignup(request, response, next) {
// 	//save a new user
// 	let signupStrategy = passport.authenticate('local-signup',{
// 		successRedirect:'/',
// 		failureRedirect:'/signup',
// 		failureFlash: true
// 	});

// 	return signupStrategy(request, response, next);
// }

// // POST /login 
// function postLogin(request, response, next) {
//     var loginProperty = passport.authenticate('local-login', {
//       successRedirect : '/',
//       failureRedirect : '/login',
//       failureFlash : true
//     });

//     return loginProperty(request, response, next);
//  }

// // GET /logout
// function getLogout(request, response,next) {
// 	request.logout();
// 	response.redirect('/');
// }
