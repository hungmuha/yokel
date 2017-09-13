"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var CommentsService = (function () {
    // updateArtist(locationId,updatedComment) {
    // 	return this.http.put(`${this.baseUrl}/user-page/${locationId}`, updatedComment);		
    // }
    function CommentsService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    CommentsService.prototype.getAllLocation = function () {
        return this.http.get(this.baseUrl + "/user");
    };
    CommentsService.prototype.getOneLocation = function (locationId) {
        console.log(locationId);
        return this.http.get(this.baseUrl + "/user/" + locationId);
    };
    CommentsService.prototype.deleteComment = function (comment) {
        console.log(comment.id);
        return this.http.delete(this.baseUrl + "/user-page/" + comment.id);
    };
    CommentsService.prototype.saveComment = function (newComment) {
        console.log(newComment);
        return this.http.post(this.baseUrl + "/users-page", newComment);
    };
    return CommentsService;
}());
CommentsService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
CommentsService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map