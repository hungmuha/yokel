import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { CommentsService } from './comments.service';
import { NgModule } from '@angular/core';

// - REMOVE WHEN CONNECTED TO BACKEND -
class comment {
  text: string;
}

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})

export class UsersPageComponent implements OnInit {
	oneLocation;
  updateText;
  location = 1234;
  // - REMOVE WHEN CONNECTED TO BACKEND -
  newComment: comment;
  // - USE WHEN CONNECTED TO BACKEND -
  // Comment= <any>{};

  constructor(
  	private route: ActivatedRoute,
  	private commentsService : CommentsService,

  ) {this.newComment = new comment();
  }

  comment = [
     {text:'placeholder comment'},
     
  ];

  ngOnInit() {
  	this.route.params.forEach(param => {
  		this.commentsService.getOneLocation(param.id)
  		.subscribe(response=>{
  			console.log(response.json());
  			this.oneLocation = response.json();
  		});
  	});
  }  

  // - REMOVE WHEN CONNECTED TO BACKEND -
  onSubmit(text) {
    if (this.newComment) {
      var entry = {
        'text': this.newComment.text,
      };
      console.log("hello from onSubmit");
      this.comment.push(entry);
    }
  }

  // - USE WHEN CONNECTED TO BACKEND -
  // onSubmit(location,Comment) {
  //    this.commentsService.saveComment(location,Comment)
  //    .subscribe(response=>{
  //      console.log(response.json());
  //    })
  // }
}


























