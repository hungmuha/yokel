"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var passport = require("passport");
var models_1 = require("../models");
var User = models_1.db.models.User;
var router = express.Router();
exports.router = router;
var comment_1 = require("../controllers/comment");
var location_1 = require("../controllers/location");
var env = {
    AUTH0_CLIENT_ID: 'znIJFscwW72J_60g2eoLhWKkwP4NozrU',
    AUTH0_DOMAIN: 'hungmuha.auth0.com',
    AUTH0_CALLBACK_URL: 'https://pacific-plains-62083.herokuapp.com/callback'
    // AUTH0_CALLBACK_URL:'http://localhost:3000/callback'
};
router.get('/login', passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    responseType: 'code',
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    scope: 'openid profile'
}), function (req, res) {
    res.redirect('/');
});
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
router.get('/callback', passport.authenticate('auth0', {
    failureRedirect: '/failure'
}), function (req, res) {
    var userid;
    console.log(req.user._json.name);
    console.log(req.user);
    var name = req.user._json.name;
    User.findOrCreate({
        where: {
            username: name
        }
    }).spread(function (user, created) {
        console.log(user.get({
            plain: true
        }));
        userid = created.id,
            console.log(created);
    });
    console.log("The user id is " + userid);
    res.redirect(req.session.returnTo || '/users-page/1');
});
router.get('/failure', function (req, res) {
    var error = req.flash("error");
    var error_description = req.flash("error_description");
    req.logout();
    res.render('failure', {
        error: error[0],
        error_description: error_description[0],
    });
});
router.get('/user', location_1.locationController.index);
router.get('/user/:id', location_1.locationController.show);
router.post('/users-page', comment_1.commentController.create);
router.delete('/users-page/:id', comment_1.commentController.destroy);
//# sourceMappingURL=index.js.map