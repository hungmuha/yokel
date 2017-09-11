"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FortCollinsComponent = (function () {
    function FortCollinsComponent() {
        this.navExpanded = false;
        this.locations = [
            {
                city: "Fort Collins",
                state: "CO"
            }
        ];
        this.comments = [];
    }
    FortCollinsComponent.prototype.dismissNav = function () {
        this.navExpanded = false;
    };
    FortCollinsComponent.prototype.toggleNav = function () {
        console.log("YAyyyy");
        if (!this.navExpanded) {
            this.navExpanded = true;
        }
        else {
            this.navExpanded = false;
        }
    };
    FortCollinsComponent.prototype.ngOnInit = function () {
    };
    return FortCollinsComponent;
}());
FortCollinsComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'fort-collins',
                templateUrl: './fort-collins.component.html',
                styleUrls: ['./fort-collins.component.css']
            },] },
];
/** @nocollapse */
FortCollinsComponent.ctorParameters = function () { return []; };
exports.FortCollinsComponent = FortCollinsComponent;
//# sourceMappingURL=fort-collins.component.js.map