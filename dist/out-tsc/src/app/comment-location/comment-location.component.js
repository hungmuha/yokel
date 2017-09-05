"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var comments_service_1 = require("../users-page/comments.service");
var CommentLocationComponent = (function () {
    function CommentLocationComponent(route, commentsService) {
        this.route = route;
        this.commentsService = commentsService;
        // comments = [
        // 	{
        // 		user: "Joe D.",
        // 		date: "August 31st, 2017",
        // 		content: "The red onion is awesome! Elk Bolognese is comforting and delicious. I dont think the pasta is fresh but it was cooked perfectly. The soft cheese on top added a creamy, cool accompaniment. At 23 bucks in this town you cant get much better without spending a lot more. We also enjoyed a burger that was cooked to medium with a little pink inside, soooo juicy. The side salad had radishes, carrots, and other vegetables which sets it worlds apart from other restaurants that give you iceberg, were it seems like an after thought."
        // 	},
        // 	{
        // 		user: "Sam C.",
        // 		date: "September 1st, 2017",
        // 		content: "Please be carefull out in the mountains, if you dont have experience or are unsure of the route please ask! I am happy to take you out!"
        // 	},
        // 	{
        // 		user: "Hung M." ,
        // 		date: "September 2nd, 2017",
        // 		content: "Little Nell for five nights during the JAS festival this Labor Day. I was so impressed with every detail in this hotel. The service was always AMAZING! The hotel room was more than I expected; very clean, modern, and every little detail was spot on. I checked in with two dogs & there were 2 dog beds placed by the fireplace when I checked in. The food at the hotel was delicious, just the right portion size. I highly recommend the gnocchi!!"
        // 	},
        // 	{
        // 		user: "Tim P.",
        // 		date: "Septemebr 3rd, 2017",
        // 		content: "With the colors chagning how busy does Marron Bells get?"
        // 	},
        // 	{
        // 		user: "Bake B.",
        // 		date: "September 4th, 2017",
        // 		content: "Tim it gets CRAZY up there during fall, I would suggest going up as early as you can. If you go before 8am you can just drive yourself up, no bus!"
        // 	},
        // 	{
        // 		user: "Luke D.",
        // 		date: "September 4th, 2017",
        // 		content: "Does anybody know if Tuesday Cruise Day is still going on??"
        // 	}
        // ];
        this.allLocations = [];
    }
    CommentLocationComponent.prototype.deleteComment = function (deletedComment) {
        var _this = this;
        this.commentsService.deleteComment(deletedComment)
            .subscribe(function (response) {
            var commentIndex = _this.allLocations.indexOf(deletedComment);
            _this.allLocations.splice(commentIndex, 1);
        });
    };
    CommentLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            _this.commentsService.getOneLocation(param.id)
                .subscribe(function (response) {
                console.log(response.json());
                _this.oneLocation = response.json();
            });
        });
    };
    CommentLocationComponent.prototype.saveComment = function (newComment) {
        console.log("saving manager");
        console.log(newComment);
        this.commentsService.saveComment(newComment)
            .subscribe(function (response) {
            console.log(response.json());
            var comment = response.json();
            window.location.href = "/user-page/" + newComment.location_id;
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