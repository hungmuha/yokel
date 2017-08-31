"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var Location = models_1.db.models.Location;
function index(req, res) {
    Location.findAll().then(function (location) {
        res.json(location);
    });
}
function create(req, res) {
}
function show(req, res) {
    Location.findById(req.params.id)
        .then(function (location) {
        if (!location)
            res.send(res, "not found");
        else
            res.json(location);
    });
}
var locationController = {};
exports.locationController = locationController;
locationController.index = index;
locationController.show = show;
//# sourceMappingURL=location.js.map