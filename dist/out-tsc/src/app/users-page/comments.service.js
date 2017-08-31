"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var CommentsService = (function () {
    function CommentsService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    CommentsService.prototype.getOneLocation = function (locationId) {
        console.log(locationId);
        return this.http.get(this.baseUrl + "/user-page/" + locationId);
    };
    CommentsService.prototype.deleteComment = function (location) {
        console.log(location.id);
        return this.http.delete(this.baseUrl + "/user-page/" + location.id);
    };
    CommentsService.prototype.saveComment = function (locationId, newComment) {
        console.log(newComment);
        return this.http.post(this.baseUrl + "/user-page/" + locationId, newComment);
    };
    CommentsService.prototype.updateArtist = function (updatedArtist) {
        return this.http.put(this.baseUrl + "/api/artists/" + updatedArtist.id, updatedArtist);
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