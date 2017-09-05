import { db } from '../models';
var Comment = db.models.Comment;
var Location = db.models.Location;

// function index(req, res) {
// 	Comment.findAll().then(function(comment) {
// 		res.json(comment);
// 	});
// }

function show(req, res) {
  Comment.findById(req.params.id)
  .then(function(comment){
    if(!comment) res.send(res, "not found");
    else res.json(comment);
  });	
}

function create(req, res) {
	Comment.create(req.body).then(function(comment){
    if(!comment) res.send(res, "not saved");
    else {
      res.json(comment);
      Location.findById(comment.location_id)
      .then(function(comment,location){
        if(!location) res.send(res, "not found");
        else {location.comment_id.push(comment.comment_id)};
      });
    }
  });
}

function update(req, res) {
  Comment.findById(req.params.id)
  .then(function(comment){
    if(!comment) res.send(res, "not found");
    else return comment.updateAttributes(req.body);
  })
  .then(function(comment){
    res.json(comment);
  });
}

function destroy(req, res) {
  Comment.findById(req.params.id)
  .then(function(comment){
    if(!comment) res.send(res, "not found");
    else return comment.destroy();
  })
  .then(function(){
    res.redirect(303, "/comment");
  });  
}

const commentController = <any>{};
  commentController.destroy= destroy;
  commentController.update= update;
  commentController.create= create;
  commentController.show= show;
  // commentController.index= index;

export {commentController};