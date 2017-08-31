import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommentsService {
baseUrl = 'http://localhost:3000';

	getOneLocation(locationId) {
		console.log(locationId);
		return this.http.get(`${this.baseUrl}/user-page/${locationId}`);	
	}

	deleteComment(location) {
		console.log(location.id);
		return this.http.delete(`${this.baseUrl}/user-page/${location.id}`);
	}

	saveComment(locationId,newComment) {
		console.log(newComment);
		return this.http.post(`${this.baseUrl}/user-page/${locationId}`, newComment);
	}

	updateArtist(updatedArtist) {
		return this.http.put(`${this.baseUrl}/api/artists/${updatedArtist.id}`, updatedArtist);		
	}

  constructor(private http: Http) { }

}

