import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  pages = ['Aspen', 'Denver', 'Fort Collins'];
	oneLocation;
  constructor(
  	private route: ActivatedRoute,
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

}
