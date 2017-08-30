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
import * as i4 from './about-page/about-page.component.ngfactory';
import * as i5 from './users-page/users-page.component.ngfactory';
import * as i6 from './app.component.ngfactory';
import * as i7 from '@angular/http';
import * as i8 from '@angular/platform-server';
import * as i9 from '@angular/common/http';
import * as i10 from '@angular/common';
import * as i11 from '@angular/platform-browser';
import * as i12 from '@angular/animations/browser';
import * as i13 from '@angular/platform-browser/animations';
import * as i14 from '@angular/animations';
import * as i15 from '@angular/router';
import * as i16 from '../../../../src/app/comments.service';
import * as i17 from 'ng2-dropdown/index';
import * as i18 from '../../../../src/app/landing-page/landing-page.component';
import * as i19 from '../../../../src/app/about-page/about-page.component';
import * as i20 from '../../../../src/app/users-page/users-page.component';
import * as i21 from '../../../../src/app/app.module';
export const AppServerModuleNgFactory:i0.NgModuleFactory<i1.AppServerModule> = i0.ɵcmf(i1.AppServerModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.LandingPageComponentNgFactory,i4.AboutPageComponentNgFactory,i5.UsersPageComponentNgFactory,
              i6.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(4608,i7.BrowserXhr,i8.ɵc,([] as any[])),i0.ɵmpd(4608,i7.ResponseOptions,
              i7.BaseResponseOptions,([] as any[])),i0.ɵmpd(4608,i7.XSRFStrategy,i8.ɵd,
              ([] as any[])),i0.ɵmpd(4608,i7.XHRBackend,i7.XHRBackend,[i7.BrowserXhr,
              i7.ResponseOptions,i7.XSRFStrategy]),i0.ɵmpd(4608,i7.RequestOptions,
              i7.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i7.Http,i8.ɵe,[i7.XHRBackend,
              i7.RequestOptions]),i0.ɵmpd(4608,i9.HttpXsrfTokenExtractor,i9.ɵg,[i10.DOCUMENT,
              i0.PLATFORM_ID,i9.ɵe]),i0.ɵmpd(4608,i9.ɵh,i9.ɵh,[i9.HttpXsrfTokenExtractor,
              i9.ɵf]),i0.ɵmpd(5120,i9.HTTP_INTERCEPTORS,(p0_0:any) => {
            return [p0_0];
          },[i9.ɵh]),i0.ɵmpd(4608,i9.XhrFactory,i8.ɵc,([] as any[])),i0.ɵmpd(4608,
              i9.HttpXhrBackend,i9.HttpXhrBackend,[i9.XhrFactory]),i0.ɵmpd(6144,i9.HttpBackend,
              (null as any),[i9.HttpXhrBackend]),i0.ɵmpd(5120,i9.HttpHandler,i8.ɵf,
              [i9.HttpBackend,[2,i9.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i9.HttpClient,
              i9.HttpClient,[i9.HttpHandler]),i0.ɵmpd(4608,i9.ɵd,i9.ɵd,([] as any[])),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i10.NgLocalization,
              i10.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i0.IterableDiffers,
              i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i11.DomSanitizer,i11.ɵe,[i10.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i11.DomSanitizer]),i0.ɵmpd(4608,i11.HAMMER_GESTURE_CONFIG,
              i11.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i11.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i11.ɵDomEventsPlugin(p0_0),new i11.ɵKeyEventsPlugin(p1_0),
                    new i11.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i10.DOCUMENT,i10.DOCUMENT,i10.DOCUMENT,i11.HAMMER_GESTURE_CONFIG]),
          i0.ɵmpd(4608,i11.EventManager,i11.EventManager,[i11.EVENT_MANAGER_PLUGINS,
              i0.NgZone]),i0.ɵmpd(135680,i11.ɵDomSharedStylesHost,i11.ɵDomSharedStylesHost,
              [i10.DOCUMENT]),i0.ɵmpd(4608,i11.ɵDomRendererFactory2,i11.ɵDomRendererFactory2,
              [i11.EventManager,i11.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i8.ɵb,i8.ɵb,
              [i11.DOCUMENT,[2,i11.ɵTRANSITION_ID]]),i0.ɵmpd(6144,i11.ɵSharedStylesHost,
              (null as any),[i8.ɵb]),i0.ɵmpd(4608,i8.ɵServerRendererFactory2,i8.ɵServerRendererFactory2,
              [i0.NgZone,i11.DOCUMENT,i11.ɵSharedStylesHost]),i0.ɵmpd(4608,i12.AnimationDriver,
              i12.ɵNoopAnimationDriver,([] as any[])),i0.ɵmpd(5120,i12.ɵAnimationStyleNormalizer,
              i13.ɵd,([] as any[])),i0.ɵmpd(4608,i12.ɵAnimationEngine,i13.ɵb,[i12.AnimationDriver,
              i12.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,i0.RendererFactory2,i8.ɵa,
              [i8.ɵServerRendererFactory2,i12.ɵAnimationEngine,i0.NgZone]),i0.ɵmpd(4352,
              i0.Testability,(null as any),([] as any[])),i0.ɵmpd(4608,i11.Meta,i11.Meta,
              [i10.DOCUMENT]),i0.ɵmpd(4608,i11.Title,i11.Title,[i10.DOCUMENT]),i0.ɵmpd(4608,
              i14.AnimationBuilder,i13.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
                  i11.DOCUMENT]),i0.ɵmpd(5120,i15.ActivatedRoute,i15.ɵf,[i15.Router]),
          i0.ɵmpd(4608,i15.NoPreloading,i15.NoPreloading,([] as any[])),i0.ɵmpd(6144,
              i15.PreloadingStrategy,(null as any),[i15.NoPreloading]),i0.ɵmpd(135680,
              i15.RouterPreloader,i15.RouterPreloader,[i15.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i15.PreloadingStrategy]),i0.ɵmpd(4608,i15.PreloadAllModules,
              i15.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i15.ROUTER_INITIALIZER,
              i15.ɵi,[i15.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i15.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i16.CommentsService,i16.CommentsService,
              ([] as any[])),i0.ɵmpd(512,i7.HttpModule,i7.HttpModule,([] as any[])),
          i0.ɵmpd(512,i9.HttpClientXsrfModule,i9.HttpClientXsrfModule,([] as any[])),
          i0.ɵmpd(512,i9.HttpClientModule,i9.HttpClientModule,([] as any[])),i0.ɵmpd(512,
              i10.CommonModule,i10.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i11.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i15.ɵb()];
          },([] as any[])),i0.ɵmpd(256,i0.APP_ID,'cli-universal-demo',([] as any[])),
          i0.ɵmpd(2048,i11.ɵTRANSITION_ID,(null as any),[i0.APP_ID]),i0.ɵmpd(512,i15.ɵg,
              i15.ɵg,[i0.Injector]),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any,
              p1_0:any,p1_1:any,p1_2:any,p2_0:any) => {
            return [i11.ɵc(p0_0,p0_1),i11.ɵf(p1_0,p1_1,p1_2),i15.ɵh(p2_0)];
          },[[2,i11.NgProbeToken],[2,i0.NgProbeToken],i11.ɵTRANSITION_ID,i10.DOCUMENT,
              i0.Injector,i15.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,
              [[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,
              i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),
          i0.ɵmpd(2048,i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i11.BrowserModule,
              i11.BrowserModule,[[3,i11.BrowserModule]]),i0.ɵmpd(512,i13.NoopAnimationsModule,
              i13.NoopAnimationsModule,([] as any[])),i0.ɵmpd(512,i8.ServerModule,
              i8.ServerModule,([] as any[])),i0.ɵmpd(512,i17.DropdownModule,i17.DropdownModule,
              ([] as any[])),i0.ɵmpd(1024,i15.ɵa,i15.ɵd,[[3,i15.Router]]),i0.ɵmpd(512,
              i15.UrlSerializer,i15.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,
              i15.ChildrenOutletContexts,i15.ChildrenOutletContexts,([] as any[])),
          i0.ɵmpd(256,i15.ROUTER_CONFIGURATION,{},([] as any[])),i0.ɵmpd(1024,i10.LocationStrategy,
              i15.ɵc,[i10.PlatformLocation,[2,i10.APP_BASE_HREF],i15.ROUTER_CONFIGURATION]),
          i0.ɵmpd(512,i10.Location,i10.Location,[i10.LocationStrategy]),i0.ɵmpd(512,
              i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i15.ROUTES,() => {
            return [[{path:'',component:i18.LandingPageComponent},{path:'about-page',
                component:i19.AboutPageComponent},{path:'users-page',component:i20.UsersPageComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i15.Router,i15.ɵe,[i0.ApplicationRef,i15.UrlSerializer,
              i15.ChildrenOutletContexts,i10.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i15.ROUTES,i15.ROUTER_CONFIGURATION,[2,i15.UrlHandlingStrategy],
              [2,i15.RouteReuseStrategy]]),i0.ɵmpd(512,i15.RouterModule,i15.RouterModule,
              [[2,i15.ɵa],[2,i15.Router]]),i0.ɵmpd(512,i21.AppModule,i21.AppModule,
              ([] as any[])),i0.ɵmpd(512,i1.AppServerModule,i1.AppServerModule,([] as any[])),
          i0.ɵmpd(256,i9.ɵe,'XSRF-TOKEN',([] as any[])),i0.ɵmpd(256,i9.ɵf,'X-XSRF-TOKEN',
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3phY2htYXJheml0aS9EZXNrdG9wL3dkaS13b3JrL3Byb2plY3RzL3lva2VsL3NyYy9hcHAvYXBwLnNlcnZlci5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvemFjaG1hcmF6aXRpL0Rlc2t0b3Avd2RpLXdvcmsvcHJvamVjdHMveW9rZWwvc3JjL2FwcC9hcHAuc2VydmVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
