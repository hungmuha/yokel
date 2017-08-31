"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./users-page.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../nav-bar/nav-bar.component.ngfactory");
var i3 = require("../../../../../src/app/nav-bar/nav-bar.component");
var i4 = require("@angular/router");
var i5 = require("@angular/common");
var i6 = require("../../../../../src/app/users-page/users-page.component");
var i7 = require("../../../../../src/app/users-page/comments.service");
var styles_UsersPageComponent = [i0.styles];
exports.RenderType_UsersPageComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_UsersPageComponent, data: {} });
function View_UsersPageComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 241, 'html', [['lang', 'en']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵeld(0, null, null, 239, 'html', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 16, 'head', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 0, 'meta', [['charset', 'utf-8']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 1, 'title', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['yokel'])), (_l()(),
            i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(),
            i1.ɵeld(0, null, null, 0, 'link', [['href', 'https://fonts.googleapis.com/css?family=Questrial'],
                ['rel', 'stylesheet']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 0, 'meta', [['content',
                'width=device-width, initial-scale=1'], ['name', 'viewport']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n  '])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'link', [['href', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'],
            ['rel', 'stylesheet']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 218, 'body', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 1, 'nav-bar', [], null, null, null, i2.View_NavBarComponent_0, i2.RenderType_NavBarComponent)), i1.ɵdid(114688, null, 0, i3.NavBarComponent, [], null, null), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 38, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 35, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵted(null, ['\n        	'])), (_l()(), i1.ɵeld(0, null, null, 31, 'div', [['class', 'col-lg-12']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n        		'])), (_l()(),
            i1.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['yokel'])), (_l()(), i1.ɵted(null, ['\n						'])), (_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class', 'tagline']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Be a local in every city you visit.'])), (_l()(), i1.ɵted(null, ['\n						'])), (_l()(), i1.ɵted(null, ['\n\n						'])), (_l()(), i1.ɵted(null, ['\n					  '])), (_l()(), i1.ɵeld(0, null, null, 20, 'div', [['class',
                'dropdown']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n					    '])), (_l()(), i1.ɵeld(0, null, null, 2, 'button', [['class', 'btn btn-primary dropdown-toggle'], ['data-toggle',
                'dropdown'], ['type', 'button']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['where ya going?\n					    '])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'span', [['class', 'caret']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n					    '])), (_l()(), i1.ɵeld(0, null, null, 13, 'ul', [['class', 'dropdown-menu']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n					      '])), (_l()(),
            i1.ɵeld(0, null, null, 2, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵeld(0, null, null, 1, 'a', [['href', '#']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Aspen'])), (_l()(), i1.ɵted(null, ['\n					      '])), (_l()(), i1.ɵeld(0, null, null, 2, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵeld(0, null, null, 1, 'a', [['href', '#']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['New York'])),
        (_l()(), i1.ɵted(null, ['\n					      '])), (_l()(), i1.ɵeld(0, null, null, 2, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵeld(0, null, null, 1, 'a', [['href', '#']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Hong Kong'])), (_l()(), i1.ɵted(null, ['\n					    '])), (_l()(), i1.ɵted(null, ['\n					  '])), (_l()(),
            i1.ɵted(null, ['\n\n					'])), (_l()(), i1.ɵted(null, ['\n		'])),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n\n	'])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 14, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 11, 'div', [['class',
                'row']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵted(null, ['\n        	'])),
        (_l()(), i1.ɵeld(0, null, null, 7, 'div', [['class', 'col-lg-12']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n				'])), (_l()(), i1.ɵeld(0, null, null, 1, 'h2', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Aspen, CO'])), (_l()(), i1.ɵted(null, ['\n				'])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['Today there\'s a high of 68° and sunny'])), (_l()(),
            i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵted(null, ['\n		'])),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 108, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Comments'])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 102, 'div', [['class',
                'detailBox']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵted(null, ['\n		'])),
        (_l()(), i1.ɵted(null, ['\n	\n		'])), (_l()(), i1.ɵeld(0, null, null, 97, 'div', [['class', 'container']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 94, 'div', [['class',
                'actionBox']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n				'])), (_l()(), i1.ɵeld(0, null, null, 91, 'ul', [['class', 'commentList']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n					'])),
        (_l()(), i1.ɵted(null, ['\n					'])), (_l()(), i1.ɵeld(0, null, null, 12, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		        '])),
        (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'commentText']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		          '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class', '']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['The red onion is awesome! Elk Bolognese is comforting and delicious. I dont think the pasta is fresh but it was cooked perfectly. The soft cheese on top added a creamy, cool accompaniment. At 23 bucks in this town you cant get much better without spending a lot more. We also enjoyed a burger that was cooked to medium with a little pink inside, soooo juicy. The side salad had radishes, carrots, and other vegetables which sets it worlds apart from other restaurants that give you iceberg, were it seems like an after thought.'])),
        (_l()(), i1.ɵted(null, [' '])), (_l()(), i1.ɵeld(0, null, null, 3, 'span', [['class', 'date sub-text']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['August 31st, 2017 '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['from Joe D.'])), (_l()(), i1.ɵted(null, ['\n		        '])), (_l()(),
            i1.ɵted(null, ['\n		      '])), (_l()(), i1.ɵted(null, ['\n		      '])),
        (_l()(), i1.ɵted(null, [' \n		      	'])), (_l()(), i1.ɵeld(0, null, null, 12, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		        '])),
        (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'commentText2']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		          '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class', '']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Please be carefull out in the mountains, if you dont have experience or are unsure of the route please ask! I am happy to take you out!'])),
        (_l()(), i1.ɵted(null, [' '])), (_l()(), i1.ɵeld(0, null, null, 3, 'span', [['class', 'date sub-text']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['August 31st, 2017 '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'strong', [['class', 'local']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['from Sam C.'])), (_l()(), i1.ɵted(null, ['\n		        '])), (_l()(), i1.ɵted(null, ['\n		       '])), (_l()(),
            i1.ɵted(null, ['\n		       	'])), (_l()(), i1.ɵted(null, ['\n					'])),
        (_l()(), i1.ɵeld(0, null, null, 12, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		        '])), (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'commentText']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		          '])), (_l()(),
            i1.ɵeld(0, null, null, 1, 'p', [['class', '']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Little Nell for five nights during the JAS festival this Labor Day. I was so impressed with every detail in this hotel. The service was always AMAZING! The hotel room was more than I expected; very clean, modern, and every little detail was spot on. I checked in with two dogs & there were 2 dog beds placed by the fireplace when I checked in. The food at the hotel was delicious, just the right portion size. I highly recommend the gnocchi!! ‘);'])),
        (_l()(), i1.ɵted(null, [' '])), (_l()(), i1.ɵeld(0, null, null, 3, 'span', [['class', 'date sub-text']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['August 31st, 2017 '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['from Hung M.'])), (_l()(), i1.ɵted(null, ['\n		        '])), (_l()(),
            i1.ɵted(null, ['\n		      '])), (_l()(), i1.ɵted(null, ['\n		      '])),
        (_l()(), i1.ɵted(null, [' \n		      	'])), (_l()(), i1.ɵeld(0, null, null, 12, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		        '])),
        (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'commentText2']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		          '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class', '']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['With the colors chagning how busy does Marron Bells get?'])),
        (_l()(), i1.ɵted(null, [' '])), (_l()(), i1.ɵeld(0, null, null, 3, 'span', [['class', 'date sub-text']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['August 31st, 2017 '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['from Tim P.'])), (_l()(), i1.ɵted(null, ['\n		        '])), (_l()(),
            i1.ɵted(null, ['\n		       '])), (_l()(), i1.ɵted(null, ['\n		       '])),
        (_l()(), i1.ɵted(null, ['\n					'])), (_l()(), i1.ɵeld(0, null, null, 12, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		        '])),
        (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'commentText']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		          '])), (_l()(), i1.ɵeld(0, null, null, 1, 'p', [['class', '']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Tim it gets CRAZY up there during fall, I would suggest going up as early as you can. If you go before 8am you can just drive yourself up, no bus!'])),
        (_l()(), i1.ɵted(null, [' '])), (_l()(), i1.ɵeld(0, null, null, 3, 'span', [['class', 'date sub-text']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['August 31st, 2017 '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'strong', [['class', 'local']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['from Bake B.'])), (_l()(), i1.ɵted(null, ['\n		        '])), (_l()(), i1.ɵted(null, ['\n		      '])), (_l()(),
            i1.ɵted(null, ['\n		      '])), (_l()(), i1.ɵted(null, [' \n		      	'])),
        (_l()(), i1.ɵeld(0, null, null, 12, 'li', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		        '])), (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'commentText2']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		          '])), (_l()(),
            i1.ɵeld(0, null, null, 1, 'p', [['class', '']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Does anybody know if Tuesday Cruise Day is still going on??'])), (_l()(),
            i1.ɵted(null, [' '])), (_l()(), i1.ɵeld(0, null, null, 3, 'span', [['class', 'date sub-text']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['August 31st, 2017 '])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['from Luke D.'])), (_l()(), i1.ɵted(null, ['\n		        '])), (_l()(),
            i1.ɵted(null, ['\n		       '])), (_l()(), i1.ɵted(null, ['\n\n		    '])),
        (_l()(), i1.ɵted(null, ['\n		  '])), (_l()(), i1.ɵted(null, ['\n		  '])),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵted(null, ['\n	'])),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])),
        (_l()(), i1.ɵeld(0, null, null, 18, 'div', [['class', 'container']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 15, 'div', [['class', 'row']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 12, 'div', [['class', 'col-lg-12']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	    		'])), (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class',
                'input-group']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	      		'])), (_l()(),
            i1.ɵeld(0, null, null, 0, 'input', [['class', 'form-control'],
                ['placeholder', 'Add a comment'], ['type', 'text']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	      		'])), (_l()(), i1.ɵeld(0, null, null, 4, 'span', [['class', 'input-group-btn']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	        	'])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-secondary'],
            ['type', 'button']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Add'])), (_l()(), i1.ɵted(null, ['\n	      		'])), (_l()(), i1.ɵted(null, ['\n	    		'])), (_l()(),
            i1.ɵted(null, ['\n	  		'])), (_l()(), i1.ɵted(null, ['\n			'])),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵted(null, ['\n	\n\n	'])),
        (_l()(), i1.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n\n	'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 15, 'div', [['class', 'container-footer']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 12, 'div', [['class',
                'row']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 9, 'div', [['class', 'col-lg-12']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n					'])),
        (_l()(), i1.ɵeld(0, null, null, 1, 'li', [['class', 'container-footer']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['yokel & copy 2017'])), (_l()(), i1.ɵted(null, ['\n					'])), (_l()(), i1.ɵeld(0, null, null, 3, 'li', [['class',
                'container-footer']], null, null, null, null, null)), (_l()(), i1.ɵeld(0, null, null, 2, 'a', [['routerLink',
                '/about-page']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 236).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(671744, null, 0, i4.RouterLinkWithHref, [i4.Router, i4.ActivatedRoute, i5.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵted(null, ['About yokel'])), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        _ck(_v, 26, 0);
        var currVal_2 = '/about-page';
        _ck(_v, 236, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 236).target;
        var currVal_1 = i1.ɵnov(_v, 236).href;
        _ck(_v, 235, 0, currVal_0, currVal_1);
    });
}
exports.View_UsersPageComponent_0 = View_UsersPageComponent_0;
function View_UsersPageComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-users-page', [], null, null, null, View_UsersPageComponent_0, exports.RenderType_UsersPageComponent)), i1.ɵdid(114688, null, 0, i6.UsersPageComponent, [i4.ActivatedRoute, i7.CommentsService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_UsersPageComponent_Host_0 = View_UsersPageComponent_Host_0;
exports.UsersPageComponentNgFactory = i1.ɵccf('app-users-page', i6.UsersPageComponent, View_UsersPageComponent_Host_0, {}, {}, []);
//# sourceMappingURL=users-page.component.ngfactory.js.map