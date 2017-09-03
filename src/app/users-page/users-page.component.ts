import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { CommentsService } from './comments.service';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})

export class UsersPageComponent implements OnInit {
	oneLocation;
  updateText;
  // - REMOVE WHEN CONNECTED TO BACKEND -
  // newComment: comment;
  // - USE WHEN CONNECTED TO BACKEND -
  // Comment= <any>{};

  // constructor(
  // 	private route: ActivatedRoute,
  // 	private commentsService : CommentsService,

  // ) {this.newComment = new comment();
  // }

  ngOnInit() {
  	// this.route.params.forEach(param => {
  	// 	this.commentsService.getOneLocation(param.id)
  	// 	.subscribe(response=>{
  	// 		console.log(response.json());
  	// 		this.oneLocation = response.json();
  	// 	});
  	// });
  }  

  // - USE WHEN CONNECTED TO BACKEND -
  // onSubmit(location,Comment) {
  //    this.commentsService.saveComment(location,Comment)
  //    .subscribe(response=>{
  //      console.log(response.json());
  //    })
  // }
}


























