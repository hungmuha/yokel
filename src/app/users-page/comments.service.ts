import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommentsService {
// baseUrl = 'http://localhost:3000';
baseUrl = 'https://pacific-plains-62083.herokuapp.com';

	getAllLocation(){
		return this.http.get(`${this.baseUrl}/user`);
	}

	getOneLocation(locationId) {
		console.log(`${this.baseUrl}/user/${locationId}`);
		return this.http.get(`${this.baseUrl}/user/${locationId}`);	
	}

	deleteComment(comment) {
		console.log(comment.id);
		return this.http.delete(`${this.baseUrl}/users-page/${comment.id}`);
	}

	saveComment(newComment) {
		console.log(newComment);
		return this.http.post(`${this.baseUrl}/users-page`, newComment);
	}

	// updateArtist(locationId,updatedComment) {
	// 	return this.http.put(`${this.baseUrl}/user-page/${locationId}`, updatedComment);		
	// }

  constructor(private http: Http) { }

}

