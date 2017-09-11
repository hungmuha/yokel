"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var comments_service_1 = require("./comments.service");
var UsersPageComponent = (function () {
    // - REMOVE WHEN CONNECTED TO BACKEND -
    // newComment: comment;
    // - USE WHEN CONNECTED TO BACKEND -
    // Comment= <any>{};
    function UsersPageComponent(route, commentsService) {
        this.route = route;
        this.commentsService = commentsService;
        this.navExpanded = false;
    }
    UsersPageComponent.prototype.dismissNav = function () {
        this.navExpanded = false;
    };
    UsersPageComponent.prototype.toggleNav = function () {
        console.log("YAyyyy");
        if (!this.navExpanded) {
            this.navExpanded = true;
        }
        else {
            this.navExpanded = false;
        }
    };
    UsersPageComponent.prototype.ngOnInit = function () {
        // this.route.params.forEach(param => {
        // 	this.commentsService.getOneLocation(param.id)
        // 	.subscribe(response=>{
        // 		console.log(response.json());
        // 		this.oneLocation = response.json();
        // 	});
        // });
    };
    return UsersPageComponent;
}());
// - USE WHEN CONNECTED TO BACKEND -
// onSubmit(location,Comment) {
//    this.commentsService.saveComment(location,Comment)
//    .subscribe(response=>{
//      console.log(response.json());
//    })
// }
UsersPageComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-users-page',
                templateUrl: './users-page.component.html',
                styleUrls: ['./users-page.component.css']
            },] },
];
/** @nocollapse */
UsersPageComponent.ctorParameters = function () { return [
    { type: router_1.ActivatedRoute, },
    { type: comments_service_1.CommentsService, },
]; };
exports.UsersPageComponent = UsersPageComponent;
//# sourceMappingURL=users-page.component.js.map