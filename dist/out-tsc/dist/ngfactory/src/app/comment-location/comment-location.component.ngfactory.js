"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./comment-location.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/forms");
var i3 = require("@angular/common");
var i4 = require("../../../../../src/app/comment-location/comment-location.component");
var i5 = require("@angular/router");
var i6 = require("../../../../../src/app/users-page/comments.service");
var styles_CommentLocationComponent = [i0.styles];
exports.RenderType_CommentLocationComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_CommentLocationComponent, data: {} });
function View_CommentLocationComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 17, 'li', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n					        '])), (_l()(), i1.ɵeld(0, null, null, 14, 'div', [['class', 'commentText']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n					          '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, [' ', ' '])), (_l()(), i1.ɵted(null, [' \n					          '])), (_l()(),
            i1.ɵted(null, ['\n					          '])), (_l()(), i1.ɵeld(0, null, null, 7, 'form', [['novalidate', '']], [[2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'ngSubmit'], [null,
                'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 10).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 10).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.deleteComment(_v.context.$implicit) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i2.ɵbf, [], null, null), i1.ɵdid(16384, null, 0, i2.NgForm, [[8,
                null], [8, null]], null, { ngSubmit: 'ngSubmit' }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i1.ɵdid(16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n			          			'])), (_l()(),
            i1.ɵeld(0, null, null, 0, 'input', [['type', 'submit'], ['value',
                    'Delete']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n			        		  '])), (_l()(), i1.ɵted(null, ['\n					        '])), (_l()(), i1.ɵted(null, ['\n			     		 ']))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.comment_field;
        _ck(_v, 5, 0, currVal_0);
        var currVal_1 = i1.ɵnov(_v, 12).ngClassUntouched;
        var currVal_2 = i1.ɵnov(_v, 12).ngClassTouched;
        var currVal_3 = i1.ɵnov(_v, 12).ngClassPristine;
        var currVal_4 = i1.ɵnov(_v, 12).ngClassDirty;
        var currVal_5 = i1.ɵnov(_v, 12).ngClassValid;
        var currVal_6 = i1.ɵnov(_v, 12).ngClassInvalid;
        var currVal_7 = i1.ɵnov(_v, 12).ngClassPending;
        _ck(_v, 8, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
    });
}
function View_CommentLocationComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 76, 'div', [['class',
                'mainBoard']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 14, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(),
            i1.ɵeld(0, null, null, 11, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵted(null, ['\n        	'])), (_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class', 'col-lg-12']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['', ',', ''])), (_l()(), i1.ɵted(null, ['\n				'])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Today there\'s a high of 68° and sunny'])), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n\n	\n	\n	'])),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 21, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(),
            i1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Comments'])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 15, 'div', [['class', 'detailBox']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	\n			'])), (_l()(), i1.ɵeld(0, null, null, 12, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n				'])), (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'actionBox']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n					'])),
        (_l()(), i1.ɵeld(0, null, null, 6, 'ul', [['class', 'commentList']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n						'])), (_l()(), i1.ɵted(null, ['\n						'])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_CommentLocationComponent_2)),
        i1.ɵdid(802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n			      '])), (_l()(), i1.ɵted(null, ['   	\n			    	'])), (_l()(),
            i1.ɵted(null, ['\n			    '])), (_l()(), i1.ɵted(null, ['\n			'])),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵted(null, ['\n	'])),
        (_l()(), i1.ɵted(null, ['\n	\n\n	'])), (_l()(), i1.ɵted(null, ['\n	'])),
        (_l()(), i1.ɵeld(0, null, null, 30, 'div', [['class', 'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 27, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 24, 'div', [['class', 'col-lg-12']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	    		'])), (_l()(), i1.ɵeld(0, null, null, 21, 'div', [['class',
                'input-group']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	    			'])), (_l()(), i1.ɵeld(0, null, null, 18, 'form', [['novalidate', '']], [[2, 'ng-untouched',
                null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
            [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                null], [2, 'ng-pending', null]], [[null, 'ngSubmit'],
            [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 55).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 55).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.saveComment(_co.newComment) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i2.ɵbf, [], null, null), i1.ɵdid(16384, null, 0, i2.NgForm, [[8,
                null], [8, null]], null, { ngSubmit: 'ngSubmit' }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i1.ɵdid(16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n			      		'])), (_l()(),
            i1.ɵeld(0, null, null, 5, 'input', [['class', 'form-control'],
                ['name', 'comment_field'], ['placeholder', 'Add a comment'], ['type', 'text']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2,
                    'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                    null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null, 'input'], [null,
                    'blur'], [null, 'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('input' === en)) {
                    var pd_0 = (i1.ɵnov(_v, 60)._handleInput($event.target.value) !== false);
                    ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                    var pd_1 = (i1.ɵnov(_v, 60).onTouched() !== false);
                    ad = (pd_1 && ad);
                }
                if (('compositionstart' === en)) {
                    var pd_2 = (i1.ɵnov(_v, 60)._compositionStart() !== false);
                    ad = (pd_2 && ad);
                }
                if (('compositionend' === en)) {
                    var pd_3 = (i1.ɵnov(_v, 60)._compositionEnd($event.target.value) !== false);
                    ad = (pd_3 && ad);
                }
                if (('ngModelChange' === en)) {
                    var pd_4 = ((_co.newComment.comment_field = $event) !== false);
                    ad = (pd_4 && ad);
                }
                return ad;
            }, null, null)), i1.ɵdid(16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i2.NgModel, [[2, i2.ControlContainer],
            [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'],
            model: [1, 'model'] }, { update: 'ngModelChange' }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n			      		'])), (_l()(), i1.ɵeld(0, null, null, 4, 'span', [['class', 'input-group-btn']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n			        	'])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-secondary'],
            ['type', 'submit']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Add'])), (_l()(), i1.ɵted(null, ['\n			      		'])), (_l()(), i1.ɵted(null, ['\n			      	'])), (_l()(),
            i1.ɵted(null, ['\n	    		'])), (_l()(), i1.ɵted(null, ['\n	  		'])),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵted(null, ['\n	'])),
        (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.oneLocation.comments;
        _ck(_v, 36, 0, currVal_2);
        var currVal_17 = 'comment_field';
        var currVal_18 = _co.newComment.comment_field;
        _ck(_v, 62, 0, currVal_17, currVal_18);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.oneLocation.city;
        var currVal_1 = _co.oneLocation.state;
        _ck(_v, 10, 0, currVal_0, currVal_1);
        var currVal_3 = i1.ɵnov(_v, 57).ngClassUntouched;
        var currVal_4 = i1.ɵnov(_v, 57).ngClassTouched;
        var currVal_5 = i1.ɵnov(_v, 57).ngClassPristine;
        var currVal_6 = i1.ɵnov(_v, 57).ngClassDirty;
        var currVal_7 = i1.ɵnov(_v, 57).ngClassValid;
        var currVal_8 = i1.ɵnov(_v, 57).ngClassInvalid;
        var currVal_9 = i1.ɵnov(_v, 57).ngClassPending;
        _ck(_v, 53, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);
        var currVal_10 = i1.ɵnov(_v, 64).ngClassUntouched;
        var currVal_11 = i1.ɵnov(_v, 64).ngClassTouched;
        var currVal_12 = i1.ɵnov(_v, 64).ngClassPristine;
        var currVal_13 = i1.ɵnov(_v, 64).ngClassDirty;
        var currVal_14 = i1.ɵnov(_v, 64).ngClassValid;
        var currVal_15 = i1.ɵnov(_v, 64).ngClassInvalid;
        var currVal_16 = i1.ɵnov(_v, 64).ngClassPending;
        _ck(_v, 59, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);
    });
}
function View_CommentLocationComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_CommentLocationComponent_1)), i1.ɵdid(16384, null, 0, i3.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['	\n\n	'])), (_l()(), i1.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.oneLocation;
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
exports.View_CommentLocationComponent_0 = View_CommentLocationComponent_0;
function View_CommentLocationComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'comment-location', [], null, null, null, View_CommentLocationComponent_0, exports.RenderType_CommentLocationComponent)), i1.ɵdid(114688, null, 0, i4.CommentLocationComponent, [i5.ActivatedRoute, i6.CommentsService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_CommentLocationComponent_Host_0 = View_CommentLocationComponent_Host_0;
exports.CommentLocationComponentNgFactory = i1.ɵccf('comment-location', i4.CommentLocationComponent, View_CommentLocationComponent_Host_0, {}, {}, []);
//# sourceMappingURL=comment-location.component.ngfactory.js.map