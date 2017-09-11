import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommentsService {
baseUrl = 'http://localhost:3000';
	getAllLocation(){
		return this.http.get(`${this.baseUrl}/user`);
	}

	getOneLocation(locationId) {
		console.log(locationId);
		return this.http.get(`${this.baseUrl}/user/${locationId}`);	
	}

	deleteComment(comment) {
		console.log(comment);
		return this.http.delete(`${this.baseUrl}/user-page/${comment.comment_id}`);
	}

	saveComment(newComment) {
		console.log(newComment);
		return this.http.post(`${this.baseUrl}/user-page`, newComment);
	}

	// updateArtist(locationId,updatedComment) {
	// 	return this.http.put(`${this.baseUrl}/user-page/${locationId}`, updatedComment);		
	// }

  constructor(private http: Http) { }

}

