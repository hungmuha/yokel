import * as express from 'express';
import * as passport from 'passport';
import { db } from '../models';
var User = db.models.User;
var router = express.Router();
import {commentController} from '../controllers/comment';
import {locationController} from '../controllers/location';
import { userController } from '../controllers/user';


const env = {
  AUTH0_CLIENT_ID: 'znIJFscwW72J_60g2eoLhWKkwP4NozrU',
  AUTH0_DOMAIN: 'hungmuha.auth0.com',
  AUTH0_CALLBACK_URL:'http://localhost:3000/callback'
};


router.get('/login', passport.authenticate('auth0', {
  clientID: env.AUTH0_CLIENT_ID,
  domain: env.AUTH0_DOMAIN,
  redirectUri: env.AUTH0_CALLBACK_URL,
  responseType: 'code',
  audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
  scope: 'openid profile'}),
  function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/failure'
  }),
  function(req, res) {
    var userid;
    console.log(req.user._json.name);
    console.log(req.user);
    var name = req.user._json.name;
    User.findOrCreate({
        where: {
          username: name
        }

      }).spread((user, created) => {
      
      console.log(user.get({
        plain: true
      }))
      userid = created.id,
      console.log(created);
    })
      console.log("The user id is " + userid);

    res.redirect(req.session.returnTo || '/users-page/1');
  }
);

router.get('/failure', function(req, res) {
  var error = req.flash("error");
  var error_description = req.flash("error_description");
  req.logout();
  res.render('failure', {
    error: error[0],
    error_description: error_description[0],
  });
});


router.get('/user', locationController.index);

router.get('/user/:id', locationController.show);

router.post('/users-page', commentController.create);

router.delete('/users-page/:id', commentController.destroy);



export {router};
