/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../src/app/app.server.module';
import * as i2 from '../../../../src/app/app.component';
import * as i3 from './landing-page/landing-page.component.ngfactory';
import * as i4 from './login-page/login-page.component.ngfactory';
import * as i5 from './sign-up/sign-up.component.ngfactory';
import * as i6 from './about-page/about-page.component.ngfactory';
import * as i7 from './users-page/users-page.component.ngfactory';
import * as i8 from './profile-page/profile-page.component.ngfactory';
import * as i9 from './app.component.ngfactory';
import * as i10 from '@angular/http';
import * as i11 from '@angular/platform-server';
import * as i12 from '@angular/common/http';
import * as i13 from '@angular/common';
import * as i14 from '@angular/platform-browser';
import * as i15 from '@angular/animations/browser';
import * as i16 from '@angular/platform-browser/animations';
import * as i17 from '@angular/animations';
import * as i18 from '@angular/forms';
import * as i19 from '@angular/router';
import * as i20 from '../../../../src/app/users-page/comments.service';
import * as i21 from '../../../../src/app/landing-page/landing-page.component';
import * as i22 from '../../../../src/app/login-page/login-page.component';
import * as i23 from '../../../../src/app/sign-up/sign-up.component';
import * as i24 from '../../../../src/app/about-page/about-page.component';
import * as i25 from '../../../../src/app/users-page/users-page.component';
import * as i26 from '../../../../src/app/profile-page/profile-page.component';
import * as i27 from '../../../../src/app/app.module';
export const AppServerModuleNgFactory:i0.NgModuleFactory<i1.AppServerModule> = i0.ɵcmf(i1.AppServerModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.LandingPageComponentNgFactory,i4.LoginPageComponentNgFactory,i5.SignUpComponentNgFactory,
              i6.AboutPageComponentNgFactory,i7.UsersPageComponentNgFactory,i8.ProfilePageComponentNgFactory,
              i9.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(4608,i10.BrowserXhr,i11.ɵc,([] as any[])),i0.ɵmpd(4608,i10.ResponseOptions,
              i10.BaseResponseOptions,([] as any[])),i0.ɵmpd(4608,i10.XSRFStrategy,
              i11.ɵd,([] as any[])),i0.ɵmpd(4608,i10.XHRBackend,i10.XHRBackend,[i10.BrowserXhr,
              i10.ResponseOptions,i10.XSRFStrategy]),i0.ɵmpd(4608,i10.RequestOptions,
              i10.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i10.Http,i11.ɵe,[i10.XHRBackend,
              i10.RequestOptions]),i0.ɵmpd(4608,i12.HttpXsrfTokenExtractor,i12.ɵg,
              [i13.DOCUMENT,i0.PLATFORM_ID,i12.ɵe]),i0.ɵmpd(4608,i12.ɵh,i12.ɵh,[i12.HttpXsrfTokenExtractor,
              i12.ɵf]),i0.ɵmpd(5120,i12.HTTP_INTERCEPTORS,(p0_0:any) => {
            return [p0_0];
          },[i12.ɵh]),i0.ɵmpd(4608,i12.XhrFactory,i11.ɵc,([] as any[])),i0.ɵmpd(4608,
              i12.HttpXhrBackend,i12.HttpXhrBackend,[i12.XhrFactory]),i0.ɵmpd(6144,
              i12.HttpBackend,(null as any),[i12.HttpXhrBackend]),i0.ɵmpd(5120,i12.HttpHandler,
              i11.ɵf,[i12.HttpBackend,[2,i12.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i12.HttpClient,
              i12.HttpClient,[i12.HttpHandler]),i0.ɵmpd(4608,i12.ɵd,i12.ɵd,([] as any[])),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i13.NgLocalization,
              i13.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i0.IterableDiffers,
              i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i14.DomSanitizer,i14.ɵe,[i13.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i14.DomSanitizer]),i0.ɵmpd(4608,i14.HAMMER_GESTURE_CONFIG,
              i14.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i14.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i14.ɵDomEventsPlugin(p0_0),new i14.ɵKeyEventsPlugin(p1_0),
                    new i14.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i13.DOCUMENT,i13.DOCUMENT,i13.DOCUMENT,i14.HAMMER_GESTURE_CONFIG]),
          i0.ɵmpd(4608,i14.EventManager,i14.EventManager,[i14.EVENT_MANAGER_PLUGINS,
              i0.NgZone]),i0.ɵmpd(135680,i14.ɵDomSharedStylesHost,i14.ɵDomSharedStylesHost,
              [i13.DOCUMENT]),i0.ɵmpd(4608,i14.ɵDomRendererFactory2,i14.ɵDomRendererFactory2,
              [i14.EventManager,i14.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i11.ɵb,i11.ɵb,
              [i14.DOCUMENT,[2,i14.ɵTRANSITION_ID]]),i0.ɵmpd(6144,i14.ɵSharedStylesHost,
              (null as any),[i11.ɵb]),i0.ɵmpd(4608,i11.ɵServerRendererFactory2,i11.ɵServerRendererFactory2,
              [i0.NgZone,i14.DOCUMENT,i14.ɵSharedStylesHost]),i0.ɵmpd(4608,i15.AnimationDriver,
              i15.ɵNoopAnimationDriver,([] as any[])),i0.ɵmpd(5120,i15.ɵAnimationStyleNormalizer,
              i16.ɵd,([] as any[])),i0.ɵmpd(4608,i15.ɵAnimationEngine,i16.ɵb,[i15.AnimationDriver,
              i15.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,i0.RendererFactory2,i11.ɵa,
              [i11.ɵServerRendererFactory2,i15.ɵAnimationEngine,i0.NgZone]),i0.ɵmpd(4352,
              i0.Testability,(null as any),([] as any[])),i0.ɵmpd(4608,i14.Meta,i14.Meta,
              [i13.DOCUMENT]),i0.ɵmpd(4608,i14.Title,i14.Title,[i13.DOCUMENT]),i0.ɵmpd(4608,
              i17.AnimationBuilder,i16.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
                  i14.DOCUMENT]),i0.ɵmpd(4608,i18.ɵi,i18.ɵi,([] as any[])),i0.ɵmpd(5120,
              i19.ActivatedRoute,i19.ɵf,[i19.Router]),i0.ɵmpd(4608,i19.NoPreloading,
              i19.NoPreloading,([] as any[])),i0.ɵmpd(6144,i19.PreloadingStrategy,
              (null as any),[i19.NoPreloading]),i0.ɵmpd(135680,i19.RouterPreloader,
              i19.RouterPreloader,[i19.Router,i0.NgModuleFactoryLoader,i0.Compiler,
                  i0.Injector,i19.PreloadingStrategy]),i0.ɵmpd(4608,i19.PreloadAllModules,
              i19.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i19.ROUTER_INITIALIZER,
              i19.ɵi,[i19.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i19.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i20.CommentsService,i20.CommentsService,
              [i10.Http]),i0.ɵmpd(512,i10.HttpModule,i10.HttpModule,([] as any[])),
          i0.ɵmpd(512,i12.HttpClientXsrfModule,i12.HttpClientXsrfModule,([] as any[])),
          i0.ɵmpd(512,i12.HttpClientModule,i12.HttpClientModule,([] as any[])),i0.ɵmpd(512,
              i13.CommonModule,i13.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i14.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i19.ɵb()];
          },([] as any[])),i0.ɵmpd(256,i0.APP_ID,'cli-universal-demo',([] as any[])),
          i0.ɵmpd(2048,i14.ɵTRANSITION_ID,(null as any),[i0.APP_ID]),i0.ɵmpd(512,i19.ɵg,
              i19.ɵg,[i0.Injector]),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any,
              p1_0:any,p1_1:any,p1_2:any,p2_0:any) => {
            return [i14.ɵc(p0_0,p0_1),i14.ɵf(p1_0,p1_1,p1_2),i19.ɵh(p2_0)];
          },[[2,i14.NgProbeToken],[2,i0.NgProbeToken],i14.ɵTRANSITION_ID,i13.DOCUMENT,
              i0.Injector,i19.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,
              [[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,
              i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),
          i0.ɵmpd(2048,i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i14.BrowserModule,
              i14.BrowserModule,[[3,i14.BrowserModule]]),i0.ɵmpd(512,i16.NoopAnimationsModule,
              i16.NoopAnimationsModule,([] as any[])),i0.ɵmpd(512,i11.ServerModule,
              i11.ServerModule,([] as any[])),i0.ɵmpd(1024,i19.ɵa,i19.ɵd,[[3,i19.Router]]),
          i0.ɵmpd(512,i19.UrlSerializer,i19.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,
              i19.ChildrenOutletContexts,i19.ChildrenOutletContexts,([] as any[])),
          i0.ɵmpd(256,i19.ROUTER_CONFIGURATION,{},([] as any[])),i0.ɵmpd(1024,i13.LocationStrategy,
              i19.ɵc,[i13.PlatformLocation,[2,i13.APP_BASE_HREF],i19.ROUTER_CONFIGURATION]),
          i0.ɵmpd(512,i13.Location,i13.Location,[i13.LocationStrategy]),i0.ɵmpd(512,
              i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i19.ROUTES,() => {
            return [[{path:'',component:i21.LandingPageComponent},{path:'login-page',
                component:i22.LoginPageComponent},{path:'sign-up',component:i23.SignUpComponent},
                {path:'about-page',component:i24.AboutPageComponent},{path:'users-page/:id',
                    component:i25.UsersPageComponent},{path:'profile-page',component:i26.ProfilePageComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i19.Router,i19.ɵe,[i0.ApplicationRef,i19.UrlSerializer,
              i19.ChildrenOutletContexts,i13.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i19.ROUTES,i19.ROUTER_CONFIGURATION,[2,i19.UrlHandlingStrategy],
              [2,i19.RouteReuseStrategy]]),i0.ɵmpd(512,i19.RouterModule,i19.RouterModule,
              [[2,i19.ɵa],[2,i19.Router]]),i0.ɵmpd(512,i18.ɵba,i18.ɵba,([] as any[])),
          i0.ɵmpd(512,i18.FormsModule,i18.FormsModule,([] as any[])),i0.ɵmpd(512,i27.AppModule,
              i27.AppModule,([] as any[])),i0.ɵmpd(512,i1.AppServerModule,i1.AppServerModule,
              ([] as any[])),i0.ɵmpd(256,i12.ɵe,'XSRF-TOKEN',([] as any[])),i0.ɵmpd(256,
              i12.ɵf,'X-XSRF-TOKEN',([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2h1bmdtdWhhbWF0aC9Ib21lV29yay9wcm9qZWN0My95b2tlbC9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2h1bmdtdWhhbWF0aC9Ib21lV29yay9wcm9qZWN0My95b2tlbC9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
