"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var comments_service_1 = require("../users-page/comments.service");
var CommentLocationComponent = (function () {
    function CommentLocationComponent(route, commentsService) {
        this.route = route;
        this.commentsService = commentsService;
        this.allLocations = [];
        this.newComment = {};
    }
    CommentLocationComponent.prototype.deleteComment = function (deletedComment) {
        var _this = this;
        this.commentsService.deleteComment(deletedComment)
            .subscribe(function (response) {
            var commentIndex = _this.allLocations.indexOf(deletedComment);
            _this.allLocations.splice(commentIndex, 1);
            window.location.href = "/users-page/" + deletedComment.locationId;
        });
    };
    CommentLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            _this.commentsService.getOneLocation(param.id)
                .subscribe(function (response) {
                // console.log(response.json());
                _this.oneLocation = response.json();
                console.log(_this.oneLocation);
            });
        });
    };
    CommentLocationComponent.prototype.saveComment = function (newComment) {
        console.log("saving comment");
        newComment.locationId = this.oneLocation.id;
        newComment.userId = 2;
        console.log(newComment);
        this.commentsService.saveComment(newComment)
            .subscribe(function (response) {
            console.log(response.json());
            var comment = response.json();
            window.location.href = "/users-page/" + newComment.locationId;
        });
    };
    return CommentLocationComponent;
}());
CommentLocationComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'comment-location',
                templateUrl: './comment-location.component.html',
                styleUrls: ['./comment-location.component.css']
            },] },
];
/** @nocollapse */
CommentLocationComponent.ctorParameters = function () { return [
    { type: router_1.ActivatedRoute, },
    { type: comments_service_1.CommentsService, },
]; };
exports.CommentLocationComponent = CommentLocationComponent;
//# sourceMappingURL=comment-location.component.js.map