"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var User = models_1.db.models.User;
function index(req, res) {
    User.findAll().then(function (user) {
        res.json(user);
    });
}
function create(req, res) {
    User.create(req.body).then(function (user) {
        if (!user)
            res.send(res, "not saved");
        else
            res.json(user);
    });
}
function show(req, res) {
    User.findById(req.params.id)
        .then(function (user) {
        if (!user)
            res.send(res, "not found");
        else
            res.json(user);
    });
}
var userController = {};
exports.userController = userController;
userController.index = index;
userController.create = create;
userController.show = show;
//# sourceMappingURL=user.js.map