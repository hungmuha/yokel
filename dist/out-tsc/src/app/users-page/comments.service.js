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
    CommentsService.prototype.getOneLocation = function (location_Id) {
        console.log(location_Id);
        return this.http.get(this.baseUrl + "/user-page/" + location_Id);
    };
    CommentsService.prototype.deleteComment = function (comment) {
        console.log(comment);
        return this.http.delete(this.baseUrl + "/user-page/" + comment.comment_id);
    };
    CommentsService.prototype.saveComment = function (newComment) {
        console.log(newComment);
        return this.http.post(this.baseUrl + "/user-page/", newComment);
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