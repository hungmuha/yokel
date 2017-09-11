"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var Location = models_1.db.models.Location;
var Comment = models_1.db.models.Comment;
function index(req, res) {
    console.log("hit this route");
    Location.findAll().then(function (location) {
        res.json(location);
    });
}
// function create(req, res) {
// 	Location.create(req.body).then(function(location){
//     if(!location) res.send(res, "not saved");
//     else res.json(location);
//   });
// }
function show(req, res) {
    Location.findById(req.params.id, { include: Comment })
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
// locationController.create = create;
locationController.show = show;
//# sourceMappingURL=location.js.map