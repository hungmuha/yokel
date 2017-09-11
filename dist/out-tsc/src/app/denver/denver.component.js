"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DenverComponent = (function () {
    function DenverComponent() {
        this.navExpanded = false;
        this.locations = [
            {
                city: "Denver",
                state: "CO"
            }
        ];
        this.comments = [];
    }
    DenverComponent.prototype.dismissNav = function () {
        this.navExpanded = false;
    };
    DenverComponent.prototype.toggleNav = function () {
        console.log("YAyyyy");
        if (!this.navExpanded) {
            this.navExpanded = true;
        }
        else {
            this.navExpanded = false;
        }
    };
    DenverComponent.prototype.ngOnInit = function () {
    };
    return DenverComponent;
}());
DenverComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'denver',
                templateUrl: './denver.component.html',
                styleUrls: ['./denver.component.css']
            },] },
];
/** @nocollapse */
DenverComponent.ctorParameters = function () { return []; };
exports.DenverComponent = DenverComponent;
//# sourceMappingURL=denver.component.js.map