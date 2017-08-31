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
import * as i8 from './app.component.ngfactory';
import * as i9 from '@angular/http';
import * as i10 from '@angular/platform-server';
import * as i11 from '@angular/common/http';
import * as i12 from '@angular/common';
import * as i13 from '@angular/platform-browser';
import * as i14 from '@angular/animations/browser';
import * as i15 from '@angular/platform-browser/animations';
import * as i16 from '@angular/animations';
import * as i17 from '@angular/router';
import * as i18 from '../../../../src/app/users-page/comments.service';
import * as i19 from '../../../../src/app/landing-page/landing-page.component';
import * as i20 from '../../../../src/app/login-page/login-page.component';
import * as i21 from '../../../../src/app/sign-up/sign-up.component';
import * as i22 from '../../../../src/app/about-page/about-page.component';
import * as i23 from '../../../../src/app/users-page/users-page.component';
import * as i24 from '../../../../src/app/app.module';
export const AppServerModuleNgFactory:i0.NgModuleFactory<i1.AppServerModule> = i0.ɵcmf(i1.AppServerModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.LandingPageComponentNgFactory,i4.LoginPageComponentNgFactory,i5.SignUpComponentNgFactory,
              i6.AboutPageComponentNgFactory,i7.UsersPageComponentNgFactory,i8.AppComponentNgFactory]],
              [3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,i9.BrowserXhr,
          i10.ɵc,([] as any[])),i0.ɵmpd(4608,i9.ResponseOptions,i9.BaseResponseOptions,
          ([] as any[])),i0.ɵmpd(4608,i9.XSRFStrategy,i10.ɵd,([] as any[])),i0.ɵmpd(4608,
          i9.XHRBackend,i9.XHRBackend,[i9.BrowserXhr,i9.ResponseOptions,i9.XSRFStrategy]),
          i0.ɵmpd(4608,i9.RequestOptions,i9.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i9.Http,i10.ɵe,[i9.XHRBackend,i9.RequestOptions]),i0.ɵmpd(4608,i11.HttpXsrfTokenExtractor,
              i11.ɵg,[i12.DOCUMENT,i0.PLATFORM_ID,i11.ɵe]),i0.ɵmpd(4608,i11.ɵh,i11.ɵh,
              [i11.HttpXsrfTokenExtractor,i11.ɵf]),i0.ɵmpd(5120,i11.HTTP_INTERCEPTORS,
              (p0_0:any) => {
                return [p0_0];
              },[i11.ɵh]),i0.ɵmpd(4608,i11.XhrFactory,i10.ɵc,([] as any[])),i0.ɵmpd(4608,
              i11.HttpXhrBackend,i11.HttpXhrBackend,[i11.XhrFactory]),i0.ɵmpd(6144,
              i11.HttpBackend,(null as any),[i11.HttpXhrBackend]),i0.ɵmpd(5120,i11.HttpHandler,
              i10.ɵf,[i11.HttpBackend,[2,i11.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i11.HttpClient,
              i11.HttpClient,[i11.HttpHandler]),i0.ɵmpd(4608,i11.ɵd,i11.ɵd,([] as any[])),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i12.NgLocalization,
              i12.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i0.IterableDiffers,
              i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i13.DomSanitizer,i13.ɵe,[i12.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i13.DomSanitizer]),i0.ɵmpd(4608,i13.HAMMER_GESTURE_CONFIG,
              i13.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i13.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i13.ɵDomEventsPlugin(p0_0),new i13.ɵKeyEventsPlugin(p1_0),
                    new i13.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i12.DOCUMENT,i12.DOCUMENT,i12.DOCUMENT,i13.HAMMER_GESTURE_CONFIG]),
          i0.ɵmpd(4608,i13.EventManager,i13.EventManager,[i13.EVENT_MANAGER_PLUGINS,
              i0.NgZone]),i0.ɵmpd(135680,i13.ɵDomSharedStylesHost,i13.ɵDomSharedStylesHost,
              [i12.DOCUMENT]),i0.ɵmpd(4608,i13.ɵDomRendererFactory2,i13.ɵDomRendererFactory2,
              [i13.EventManager,i13.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i10.ɵb,i10.ɵb,
              [i13.DOCUMENT,[2,i13.ɵTRANSITION_ID]]),i0.ɵmpd(6144,i13.ɵSharedStylesHost,
              (null as any),[i10.ɵb]),i0.ɵmpd(4608,i10.ɵServerRendererFactory2,i10.ɵServerRendererFactory2,
              [i0.NgZone,i13.DOCUMENT,i13.ɵSharedStylesHost]),i0.ɵmpd(4608,i14.AnimationDriver,
              i14.ɵNoopAnimationDriver,([] as any[])),i0.ɵmpd(5120,i14.ɵAnimationStyleNormalizer,
              i15.ɵd,([] as any[])),i0.ɵmpd(4608,i14.ɵAnimationEngine,i15.ɵb,[i14.AnimationDriver,
              i14.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,i0.RendererFactory2,i10.ɵa,
              [i10.ɵServerRendererFactory2,i14.ɵAnimationEngine,i0.NgZone]),i0.ɵmpd(4352,
              i0.Testability,(null as any),([] as any[])),i0.ɵmpd(4608,i13.Meta,i13.Meta,
              [i12.DOCUMENT]),i0.ɵmpd(4608,i13.Title,i13.Title,[i12.DOCUMENT]),i0.ɵmpd(4608,
              i16.AnimationBuilder,i15.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
                  i13.DOCUMENT]),i0.ɵmpd(5120,i17.ActivatedRoute,i17.ɵf,[i17.Router]),
          i0.ɵmpd(4608,i17.NoPreloading,i17.NoPreloading,([] as any[])),i0.ɵmpd(6144,
              i17.PreloadingStrategy,(null as any),[i17.NoPreloading]),i0.ɵmpd(135680,
              i17.RouterPreloader,i17.RouterPreloader,[i17.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i17.PreloadingStrategy]),i0.ɵmpd(4608,i17.PreloadAllModules,
              i17.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i17.ROUTER_INITIALIZER,
              i17.ɵi,[i17.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i17.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i18.CommentsService,i18.CommentsService,
              [i9.Http]),i0.ɵmpd(512,i9.HttpModule,i9.HttpModule,([] as any[])),i0.ɵmpd(512,
              i11.HttpClientXsrfModule,i11.HttpClientXsrfModule,([] as any[])),i0.ɵmpd(512,
              i11.HttpClientModule,i11.HttpClientModule,([] as any[])),i0.ɵmpd(512,
              i12.CommonModule,i12.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i13.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i17.ɵb()];
          },([] as any[])),i0.ɵmpd(256,i0.APP_ID,'cli-universal-demo',([] as any[])),
          i0.ɵmpd(2048,i13.ɵTRANSITION_ID,(null as any),[i0.APP_ID]),i0.ɵmpd(512,i17.ɵg,
              i17.ɵg,[i0.Injector]),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any,
              p1_0:any,p1_1:any,p1_2:any,p2_0:any) => {
            return [i13.ɵc(p0_0,p0_1),i13.ɵf(p1_0,p1_1,p1_2),i17.ɵh(p2_0)];
          },[[2,i13.NgProbeToken],[2,i0.NgProbeToken],i13.ɵTRANSITION_ID,i12.DOCUMENT,
              i0.Injector,i17.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,
              [[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,
              i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),
          i0.ɵmpd(2048,i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i13.BrowserModule,
              i13.BrowserModule,[[3,i13.BrowserModule]]),i0.ɵmpd(512,i15.NoopAnimationsModule,
              i15.NoopAnimationsModule,([] as any[])),i0.ɵmpd(512,i10.ServerModule,
              i10.ServerModule,([] as any[])),i0.ɵmpd(1024,i17.ɵa,i17.ɵd,[[3,i17.Router]]),
          i0.ɵmpd(512,i17.UrlSerializer,i17.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,
              i17.ChildrenOutletContexts,i17.ChildrenOutletContexts,([] as any[])),
          i0.ɵmpd(256,i17.ROUTER_CONFIGURATION,{},([] as any[])),i0.ɵmpd(1024,i12.LocationStrategy,
              i17.ɵc,[i12.PlatformLocation,[2,i12.APP_BASE_HREF],i17.ROUTER_CONFIGURATION]),
          i0.ɵmpd(512,i12.Location,i12.Location,[i12.LocationStrategy]),i0.ɵmpd(512,
              i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i17.ROUTES,() => {
            return [[{path:'',component:i19.LandingPageComponent},{path:'login-page',
                component:i20.LoginPageComponent},{path:'sign-up',component:i21.SignUpComponent},
                {path:'about-page',component:i22.AboutPageComponent},{path:'users-page',
                    component:i23.UsersPageComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i17.Router,i17.ɵe,[i0.ApplicationRef,i17.UrlSerializer,
              i17.ChildrenOutletContexts,i12.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i17.ROUTES,i17.ROUTER_CONFIGURATION,[2,i17.UrlHandlingStrategy],
              [2,i17.RouteReuseStrategy]]),i0.ɵmpd(512,i17.RouterModule,i17.RouterModule,
              [[2,i17.ɵa],[2,i17.Router]]),i0.ɵmpd(512,i24.AppModule,i24.AppModule,
              ([] as any[])),i0.ɵmpd(512,i1.AppServerModule,i1.AppServerModule,([] as any[])),
          i0.ɵmpd(256,i11.ɵe,'XSRF-TOKEN',([] as any[])),i0.ɵmpd(256,i11.ɵf,'X-XSRF-TOKEN',
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2FjdGlvbmN1c3RvbWVyL1dESS1zdHVmZi9ob21ld29yay95b2tlbC9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2FjdGlvbmN1c3RvbWVyL1dESS1zdHVmZi9ob21ld29yay95b2tlbC9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
