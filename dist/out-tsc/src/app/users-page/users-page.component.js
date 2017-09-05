"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UsersPageComponent = (function () {
    function UsersPageComponent() {
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
    // - REMOVE WHEN CONNECTED TO BACKEND -
    // newComment: comment;
    // - USE WHEN CONNECTED TO BACKEND -
    // Comment= <any>{};
    // constructor(
    // 	private route: ActivatedRoute,
    // 	private commentsService : CommentsService,
    // ) {this.newComment = new comment();
    // }
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
UsersPageComponent.ctorParameters = function () { return []; };
exports.UsersPageComponent = UsersPageComponent;
//# sourceMappingURL=users-page.component.js.map