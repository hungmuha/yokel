"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VailComponent = (function () {
    function VailComponent() {
        this.navExpanded = false;
        this.locations = [
            {
                city: "Vail",
                state: "CO"
            }
        ];
        this.comments = [];
    }
    VailComponent.prototype.dismissNav = function () {
        this.navExpanded = false;
    };
    VailComponent.prototype.toggleNav = function () {
        console.log("YAyyyy");
        if (!this.navExpanded) {
            this.navExpanded = true;
        }
        else {
            this.navExpanded = false;
        }
    };
    VailComponent.prototype.ngOnInit = function () {
    };
    return VailComponent;
}());
VailComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'vail',
                templateUrl: './vail.component.html',
                styleUrls: ['./vail.component.css']
            },] },
];
/** @nocollapse */
VailComponent.ctorParameters = function () { return []; };
exports.VailComponent = VailComponent;
//# sourceMappingURL=vail.component.js.map