import { db } from '../models';
var Location = db.models.Location;

function index(req, res) {
	Location.findAll().then(function(location) {
		res.json(location);
	});
}

function show(req, res) {
  Location.findById(req.params.id)
  .then(function(location){
    if(!location) res.send(res, "not found");
    else res.json(location);
  });	
}

const locationController = <any>{};
locationController.index = index;
locationController.show = show;

export {locationController};