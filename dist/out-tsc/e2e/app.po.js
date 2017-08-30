"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var YokTestPage = (function () {
    function YokTestPage() {
    }
    YokTestPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    YokTestPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return YokTestPage;
}());
exports.YokTestPage = YokTestPage;
//# sourceMappingURL=app.po.js.map