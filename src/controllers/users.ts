<<<<<<< HEAD
import {db} from '../models';
import * as passport from 'passport';

var Comment = db.models.Comment;
var Location = db.models.Location;


=======
import { db } from '../models';
var User = db.models.User;


function index(req, res) {
	User.findAll().then(function(users) {
		res.json(users);
	});
}

function show(req, res) {

}

function create(req, res) {
	User.create(req.body).then(function(user){
    if(!user) res.send(res, "not saved");
    else res.json(user);
  });
}

function update(req, res) {

}

function destroy(req, res) {

}

const usersController = <any>{};
usersController.index = index;
usersController.show = show;
usersController.create = create;
usersController.update = update;
usersController.destroy = destroy;

export {usersController};
>>>>>>> 18b9b07135c91626f337b280c63886588c29958d
