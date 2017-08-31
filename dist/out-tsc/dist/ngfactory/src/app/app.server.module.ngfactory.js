"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../../../../src/app/app.server.module");
var i2 = require("../../../../src/app/app.component");
var i3 = require("./landing-page/landing-page.component.ngfactory");
var i4 = require("./login-page/login-page.component.ngfactory");
var i5 = require("./sign-up/sign-up.component.ngfactory");
var i6 = require("./about-page/about-page.component.ngfactory");
var i7 = require("./users-page/users-page.component.ngfactory");
var i8 = require("./app.component.ngfactory");
var i9 = require("@angular/http");
var i10 = require("@angular/platform-server");
var i11 = require("@angular/common/http");
var i12 = require("@angular/common");
var i13 = require("@angular/platform-browser");
var i14 = require("@angular/animations/browser");
var i15 = require("@angular/platform-browser/animations");
var i16 = require("@angular/animations");
var i17 = require("@angular/router");
var i18 = require("../../../../src/app/users-page/comments.service");
var i19 = require("../../../../src/app/landing-page/landing-page.component");
var i20 = require("../../../../src/app/login-page/login-page.component");
var i21 = require("../../../../src/app/sign-up/sign-up.component");
var i22 = require("../../../../src/app/about-page/about-page.component");
var i23 = require("../../../../src/app/users-page/users-page.component");
var i24 = require("../../../../src/app/app.module");
exports.AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.LandingPageComponentNgFactory, i4.LoginPageComponentNgFactory, i5.SignUpComponentNgFactory,
                    i6.AboutPageComponentNgFactory, i7.UsersPageComponentNgFactory, i8.AppComponentNgFactory]],
            [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i9.BrowserXhr, i10.ɵc, []), i0.ɵmpd(4608, i9.ResponseOptions, i9.BaseResponseOptions, []), i0.ɵmpd(4608, i9.XSRFStrategy, i10.ɵd, []), i0.ɵmpd(4608, i9.XHRBackend, i9.XHRBackend, [i9.BrowserXhr, i9.ResponseOptions, i9.XSRFStrategy]),
        i0.ɵmpd(4608, i9.RequestOptions, i9.BaseRequestOptions, []), i0.ɵmpd(5120, i9.Http, i10.ɵe, [i9.XHRBackend, i9.RequestOptions]), i0.ɵmpd(4608, i11.HttpXsrfTokenExtractor, i11.ɵg, [i12.DOCUMENT, i0.PLATFORM_ID, i11.ɵe]), i0.ɵmpd(4608, i11.ɵh, i11.ɵh, [i11.HttpXsrfTokenExtractor, i11.ɵf]), i0.ɵmpd(5120, i11.HTTP_INTERCEPTORS, function (p0_0) {
            return [p0_0];
        }, [i11.ɵh]), i0.ɵmpd(4608, i11.XhrFactory, i10.ɵc, []), i0.ɵmpd(4608, i11.HttpXhrBackend, i11.HttpXhrBackend, [i11.XhrFactory]), i0.ɵmpd(6144, i11.HttpBackend, null, [i11.HttpXhrBackend]), i0.ɵmpd(5120, i11.HttpHandler, i10.ɵf, [i11.HttpBackend, [2, i11.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i11.HttpClient, i11.HttpClient, [i11.HttpHandler]), i0.ɵmpd(4608, i11.ɵd, i11.ɵd, []),
        i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i12.NgLocalization, i12.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []),
        i0.ɵmpd(4608, i13.DomSanitizer, i13.ɵe, [i12.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i13.DomSanitizer]), i0.ɵmpd(4608, i13.HAMMER_GESTURE_CONFIG, i13.HammerGestureConfig, []), i0.ɵmpd(5120, i13.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i13.ɵDomEventsPlugin(p0_0), new i13.ɵKeyEventsPlugin(p1_0),
                new i13.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i12.DOCUMENT, i12.DOCUMENT, i12.DOCUMENT, i13.HAMMER_GESTURE_CONFIG]),
        i0.ɵmpd(4608, i13.EventManager, i13.EventManager, [i13.EVENT_MANAGER_PLUGINS,
            i0.NgZone]), i0.ɵmpd(135680, i13.ɵDomSharedStylesHost, i13.ɵDomSharedStylesHost, [i12.DOCUMENT]), i0.ɵmpd(4608, i13.ɵDomRendererFactory2, i13.ɵDomRendererFactory2, [i13.EventManager, i13.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i10.ɵb, i10.ɵb, [i13.DOCUMENT, [2, i13.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i13.ɵSharedStylesHost, null, [i10.ɵb]), i0.ɵmpd(4608, i10.ɵServerRendererFactory2, i10.ɵServerRendererFactory2, [i0.NgZone, i13.DOCUMENT, i13.ɵSharedStylesHost]), i0.ɵmpd(4608, i14.AnimationDriver, i14.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i14.ɵAnimationStyleNormalizer, i15.ɵd, []), i0.ɵmpd(4608, i14.ɵAnimationEngine, i15.ɵb, [i14.AnimationDriver,
            i14.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i10.ɵa, [i10.ɵServerRendererFactory2, i14.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i13.Meta, i13.Meta, [i12.DOCUMENT]), i0.ɵmpd(4608, i13.Title, i13.Title, [i12.DOCUMENT]), i0.ɵmpd(4608, i16.AnimationBuilder, i15.ɵBrowserAnimationBuilder, [i0.RendererFactory2,
            i13.DOCUMENT]), i0.ɵmpd(5120, i17.ActivatedRoute, i17.ɵf, [i17.Router]),
        i0.ɵmpd(4608, i17.NoPreloading, i17.NoPreloading, []), i0.ɵmpd(6144, i17.PreloadingStrategy, null, [i17.NoPreloading]), i0.ɵmpd(135680, i17.RouterPreloader, i17.RouterPreloader, [i17.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i17.PreloadingStrategy]), i0.ɵmpd(4608, i17.PreloadAllModules, i17.PreloadAllModules, []), i0.ɵmpd(5120, i17.ROUTER_INITIALIZER, i17.ɵi, [i17.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i17.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i18.CommentsService, i18.CommentsService, [i9.Http]), i0.ɵmpd(512, i9.HttpModule, i9.HttpModule, []), i0.ɵmpd(512, i11.HttpClientXsrfModule, i11.HttpClientXsrfModule, []), i0.ɵmpd(512, i11.HttpClientModule, i11.HttpClientModule, []), i0.ɵmpd(512, i12.CommonModule, i12.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i13.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i17.ɵb()];
        }, []), i0.ɵmpd(256, i0.APP_ID, 'cli-universal-demo', []),
        i0.ɵmpd(2048, i13.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(512, i17.ɵg, i17.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0, p1_1, p1_2, p2_0) {
            return [i13.ɵc(p0_0, p0_1), i13.ɵf(p1_0, p1_1, p1_2), i17.ɵh(p2_0)];
        }, [[2, i13.NgProbeToken], [2, i0.NgProbeToken], i13.ɵTRANSITION_ID, i12.DOCUMENT,
            i0.Injector, i17.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole,
            i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]),
        i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i13.BrowserModule, i13.BrowserModule, [[3, i13.BrowserModule]]), i0.ɵmpd(512, i15.NoopAnimationsModule, i15.NoopAnimationsModule, []), i0.ɵmpd(512, i10.ServerModule, i10.ServerModule, []), i0.ɵmpd(1024, i17.ɵa, i17.ɵd, [[3, i17.Router]]),
        i0.ɵmpd(512, i17.UrlSerializer, i17.DefaultUrlSerializer, []), i0.ɵmpd(512, i17.ChildrenOutletContexts, i17.ChildrenOutletContexts, []),
        i0.ɵmpd(256, i17.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i12.LocationStrategy, i17.ɵc, [i12.PlatformLocation, [2, i12.APP_BASE_HREF], i17.ROUTER_CONFIGURATION]),
        i0.ɵmpd(512, i12.Location, i12.Location, [i12.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i17.ROUTES, function () {
            return [[{ path: '', component: i19.LandingPageComponent }, { path: 'login-page',
                        component: i20.LoginPageComponent }, { path: 'sign-up', component: i21.SignUpComponent },
                    { path: 'about-page', component: i22.AboutPageComponent }, { path: 'users-page',
                        component: i23.UsersPageComponent }]];
        }, []), i0.ɵmpd(1024, i17.Router, i17.ɵe, [i0.ApplicationRef, i17.UrlSerializer,
            i17.ChildrenOutletContexts, i12.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i17.ROUTES, i17.ROUTER_CONFIGURATION, [2, i17.UrlHandlingStrategy],
            [2, i17.RouteReuseStrategy]]), i0.ɵmpd(512, i17.RouterModule, i17.RouterModule, [[2, i17.ɵa], [2, i17.Router]]), i0.ɵmpd(512, i24.AppModule, i24.AppModule, []), i0.ɵmpd(512, i1.AppServerModule, i1.AppServerModule, []),
        i0.ɵmpd(256, i11.ɵe, 'XSRF-TOKEN', []), i0.ɵmpd(256, i11.ɵf, 'X-XSRF-TOKEN', [])]);
});
//# sourceMappingURL=app.server.module.ngfactory.js.map