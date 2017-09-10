import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { CommentsService } from '../users-page/comments.service';

@Component({
  selector: 'comment-location',
  templateUrl: './comment-location.component.html',
  styleUrls: ['./comment-location.component.css']
})
export class CommentLocationComponent implements OnInit {



allLocations = [];
newComment;
oneLocation;
  deleteComment(deletedComment) {
    this.commentsService.deleteComment(deletedComment)
    .subscribe(response => {
      let commentIndex = this.allLocations.indexOf(deletedComment);
      this.allLocations.splice(commentIndex, 1);
    });
  }



  constructor(
  	private route : ActivatedRoute,
  	private commentsService : CommentsService
  ) { }

  ngOnInit() {
  	this.route.params.forEach(param => {
  		this.commentsService.getOneLocation(param.id)
  		.subscribe(response=>{
  			console.log(response.json());
  			this.oneLocation = response.json();
  		});
  	});
  }

   saveComment(newComment) {
      console.log("saving manager");
      console.log(newComment);
      this.commentsService.saveComment(newComment)
          .subscribe(response => {
        console.log(response.json());
        let comment = response.json();
        window.location.href = "/user-page/" + newComment.location_id;
      })
    }

}
