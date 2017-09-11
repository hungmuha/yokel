import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { CommentsService } from './comments.service';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})

export class UsersPageComponent implements OnInit {
  navExpanded = false;


  dismissNav() {
    this.navExpanded = false;
  }

  toggleNav() {
    console.log("YAyyyy");
    if (!this.navExpanded) {
      this.navExpanded = true;
    } else {
      this.navExpanded = false;
    }
    
  }


  
	allLocations;
  updateText;
  // - REMOVE WHEN CONNECTED TO BACKEND -
  // newComment: comment;
  // - USE WHEN CONNECTED TO BACKEND -
  // Comment= <any>{};

  constructor(
  	private route: ActivatedRoute,
  	private commentsService : CommentsService,
  ) {}

  ngOnInit() {
    this.commentsService.getAllLocation()
      .subscribe(response => {
        console.log(response.json());
        this.allLocations = response.json()
      });
  }  

  // - USE WHEN CONNECTED TO BACKEND -
  // onSubmit(location,Comment) {
  //    this.commentsService.saveComment(location,Comment)
  //    .subscribe(response=>{
  //      console.log(response.json());
  //    })
  // }
}


























