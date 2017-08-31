"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var app_server_module_ngfactory_1 = require("../dist/ngfactory/src/app/app.server.module.ngfactory");
var express = require("express");
var bodyParser = require("body-parser");
var fs_1 = require("fs");
var path_1 = require("path");
var cookieParser = require("cookie-parser");
var Auth0Strategy = require("passport-auth0");
var passport = require("passport");
var index_1 = require("./config/index");
// const home = require('./config/main');
// const PORT = 3000;
core_1.enableProdMode();
var app = express();
// This will configure Passport to use Auth0
var strategy = new Auth0Strategy({
    domain: 'hungmuha.auth0.com',
    clientID: 'znIJFscwW72J_60g2eoLhWKkwP4NozrU',
    clientSecret: 'Y5iu8s8fs6h2pSFnH4Nf82biu7LHIyu7Ej9vjX7-D5J90XfcxhV9NFGLr_8igKUp',
    callbackURL: 'http://localhost:3000/callback'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
});
passport.use(strategy);
//
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
// import { router as yokelRouter} from './config/main';
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
// app.use(yokelRouter);
app.use(cookieParser());
app.use(index_1.router);
// app.use('/home', home);
var template = fs_1.readFileSync(path_1.join(__dirname, '..', 'dist', 'index.html')).toString();
app.engine('html', function (_, options, callback) {
    console.log(options);
    var opts = { document: template, url: options.req.url };
    platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, opts)
        .then(function (html) { return callback(null, html); });
});
app.set('view engine', 'html');
app.set('views', 'src');
app.get('*.*', express.static(path_1.join(__dirname, '..', 'dist')));
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Express server is running on http://localhost:3000/');
});
//# sourceMappingURL=server.js.map