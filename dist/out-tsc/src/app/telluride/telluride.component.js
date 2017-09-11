"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TellurideComponent = (function () {
    function TellurideComponent() {
        this.navExpanded = false;
        this.locations = [
            {
                city: "Telluride",
                state: "CO"
            }
        ];
        this.comments = [];
    }
    TellurideComponent.prototype.dismissNav = function () {
        this.navExpanded = false;
    };
    TellurideComponent.prototype.toggleNav = function () {
        console.log("YAyyyy");
        if (!this.navExpanded) {
            this.navExpanded = true;
        }
        else {
            this.navExpanded = false;
        }
    };
    TellurideComponent.prototype.ngOnInit = function () {
    };
    return TellurideComponent;
}());
TellurideComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'telluride',
                templateUrl: './telluride.component.html',
                styleUrls: ['./telluride.component.css']
            },] },
];
/** @nocollapse */
TellurideComponent.ctorParameters = function () { return []; };
exports.TellurideComponent = TellurideComponent;
//# sourceMappingURL=telluride.component.js.map