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
newComment = <any> {};
oneLocation; //-------changed
  deleteComment(deletedComment) {
    this.commentsService.deleteComment(deletedComment)
    .subscribe(response => {
      let commentIndex = this.allLocations.indexOf(deletedComment);
      this.allLocations.splice(commentIndex, 1);
      window.location.href = "/users-page/" + deletedComment.locationId;
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
  			// console.log(response.json());
  			this.oneLocation = response.json();
        console.log(this.oneLocation);
  		});
  	});
  }

   saveComment(newComment) {
      console.log("saving comment");
      newComment.locationId = this.oneLocation.id;
      newComment.userId = 2;
      console.log(newComment);
      this.commentsService.saveComment(newComment)
          .subscribe(response => {
        console.log(response.json());
        let comment = response.json();
        window.location.href = "/users-page/" + newComment.locationId;
      })
    }

}
