"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var comments_service_1 = require("./comments.service");
var UsersPageComponent = (function () {
    function UsersPageComponent(route, commentsService) {
        this.route = route;
        this.commentsService = commentsService;
        this.pages = ['Aspen', 'Denver', 'Fort Collins'];
    }
    UsersPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            _this.commentsService.getOneLocation(param.id)
                .subscribe(function (response) {
                console.log(response.json());
                _this.oneLocation = response.json();
            });
        });
    };
    return UsersPageComponent;
}());
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