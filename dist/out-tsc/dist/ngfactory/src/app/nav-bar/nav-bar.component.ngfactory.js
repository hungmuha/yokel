"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./nav-bar.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/router");
var i3 = require("@angular/common");
var i4 = require("../../../../../src/app/nav-bar/nav-bar.component");
var styles_NavBarComponent = [i0.styles];
exports.RenderType_NavBarComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_NavBarComponent, data: {} });
function View_NavBarComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 20, 'nav', [['class',
                'nav-bar']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n	\n		\n		'])), (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class', 'nav-item']], null, null, null, null, null)), (_l()(), i1.ɵeld(0, null, null, 2, 'a', [['routerLink', '/users-page']], [[1, 'target', 0], [8, 'href',
                4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(null, ['home'])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class',
                'nav-item']], null, null, null, null, null)),
        (_l()(), i1.ɵeld(0, null, null, 2, 'a', [['routerLink', '/profile-page']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(null, ['profile'])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class',
                'nav-item']], null, null, null, null, null)),
        (_l()(), i1.ɵeld(0, null, null, 2, 'a', [['routerLink', '/about-page']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(null, ['about'])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 2, 'div', [['class',
                'nav-item']], null, null, null, null, null)),
        (_l()(), i1.ɵeld(0, null, null, 1, 'a', [['href', '/logout']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['logout'])), (_l()(), i1.ɵted(null, ['\n	\n']))], function (_ck, _v) {
        var currVal_2 = '/users-page';
        _ck(_v, 4, 0, currVal_2);
        var currVal_5 = '/profile-page';
        _ck(_v, 9, 0, currVal_5);
        var currVal_8 = '/about-page';
        _ck(_v, 14, 0, currVal_8);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 4).target;
        var currVal_1 = i1.ɵnov(_v, 4).href;
        _ck(_v, 3, 0, currVal_0, currVal_1);
        var currVal_3 = i1.ɵnov(_v, 9).target;
        var currVal_4 = i1.ɵnov(_v, 9).href;
        _ck(_v, 8, 0, currVal_3, currVal_4);
        var currVal_6 = i1.ɵnov(_v, 14).target;
        var currVal_7 = i1.ɵnov(_v, 14).href;
        _ck(_v, 13, 0, currVal_6, currVal_7);
    });
}
exports.View_NavBarComponent_0 = View_NavBarComponent_0;
function View_NavBarComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'nav-bar', [], null, null, null, View_NavBarComponent_0, exports.RenderType_NavBarComponent)),
        i1.ɵdid(114688, null, 0, i4.NavBarComponent, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_NavBarComponent_Host_0 = View_NavBarComponent_Host_0;
exports.NavBarComponentNgFactory = i1.ɵccf('nav-bar', i4.NavBarComponent, View_NavBarComponent_Host_0, {}, {}, []);
//# sourceMappingURL=nav-bar.component.ngfactory.js.map