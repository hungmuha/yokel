"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BeaverCreekComponent = (function () {
    function BeaverCreekComponent() {
        this.navExpanded = false;
        this.locations = [
            {
                city: "Beaver Creek",
                state: "CO"
            }
        ];
        this.comments = [];
    }
    BeaverCreekComponent.prototype.dismissNav = function () {
        this.navExpanded = false;
    };
    BeaverCreekComponent.prototype.toggleNav = function () {
        console.log("YAyyyy");
        if (!this.navExpanded) {
            this.navExpanded = true;
        }
        else {
            this.navExpanded = false;
        }
    };
    BeaverCreekComponent.prototype.ngOnInit = function () {
    };
    return BeaverCreekComponent;
}());
BeaverCreekComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'beaver-creek',
                templateUrl: './beaver-creek.component.html',
                styleUrls: ['./beaver-creek.component.css']
            },] },
];
/** @nocollapse */
BeaverCreekComponent.ctorParameters = function () { return []; };
exports.BeaverCreekComponent = BeaverCreekComponent;
//# sourceMappingURL=beaver-creek.component.js.map