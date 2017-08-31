import { db } from '../models';
var User = db.models.User;

function index(req, res) {
	User.findAll().then(function(user) {
		res.json(user);
	});
}

function show(req, res) {
  User.findById(req.params.id)
  .then(function(user){
    if(!user) res.send(res, "not found");
    else res.json(user);
  });	
}

const userController = <any>{};
	userController.index = index;
	userController.show =show;
 
 export {userController};