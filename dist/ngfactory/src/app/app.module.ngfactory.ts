/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../src/app/app.module';
import * as i2 from '../../../../src/app/app.component';
import * as i3 from './landing-page/landing-page.component.ngfactory';
import * as i4 from './login-page/login-page.component.ngfactory';
import * as i5 from './sign-up/sign-up.component.ngfactory';
import * as i6 from './about-page/about-page.component.ngfactory';
import * as i7 from './users-page/users-page.component.ngfactory';
import * as i8 from './profile-page/profile-page.component.ngfactory';
import * as i9 from './app.component.ngfactory';
import * as i10 from '@angular/common';
import * as i11 from '@angular/platform-browser';
import * as i12 from '@angular/http';
import * as i13 from '@angular/forms';
import * as i14 from '@angular/router';
import * as i15 from '../../../../src/app/users-page/comments.service';
import * as i16 from '../../../../src/app/landing-page/landing-page.component';
import * as i17 from '../../../../src/app/login-page/login-page.component';
import * as i18 from '../../../../src/app/sign-up/sign-up.component';
import * as i19 from '../../../../src/app/about-page/about-page.component';
import * as i20 from '../../../../src/app/users-page/users-page.component';
import * as i21 from '../../../../src/app/profile-page/profile-page.component';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.LandingPageComponentNgFactory,i4.LoginPageComponentNgFactory,i5.SignUpComponentNgFactory,
              i6.AboutPageComponentNgFactory,i7.UsersPageComponentNgFactory,i8.ProfilePageComponentNgFactory,
              i9.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
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
              [i11.EventManager,i11.ɵDomSharedStylesHost]),i0.ɵmpd(6144,i0.RendererFactory2,
              (null as any),[i11.ɵDomRendererFactory2]),i0.ɵmpd(6144,i11.ɵSharedStylesHost,
              (null as any),[i11.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i0.Testability,
              i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i11.Meta,i11.Meta,[i10.DOCUMENT]),
          i0.ɵmpd(4608,i11.Title,i11.Title,[i10.DOCUMENT]),i0.ɵmpd(4608,i12.BrowserXhr,
              i12.BrowserXhr,([] as any[])),i0.ɵmpd(4608,i12.ResponseOptions,i12.BaseResponseOptions,
              ([] as any[])),i0.ɵmpd(5120,i12.XSRFStrategy,i12.ɵb,([] as any[])),i0.ɵmpd(4608,
              i12.XHRBackend,i12.XHRBackend,[i12.BrowserXhr,i12.ResponseOptions,i12.XSRFStrategy]),
          i0.ɵmpd(4608,i12.RequestOptions,i12.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i12.Http,i12.ɵc,[i12.XHRBackend,i12.RequestOptions]),i0.ɵmpd(4608,i13.ɵi,
              i13.ɵi,([] as any[])),i0.ɵmpd(5120,i14.ActivatedRoute,i14.ɵf,[i14.Router]),
          i0.ɵmpd(4608,i14.NoPreloading,i14.NoPreloading,([] as any[])),i0.ɵmpd(6144,
              i14.PreloadingStrategy,(null as any),[i14.NoPreloading]),i0.ɵmpd(135680,
              i14.RouterPreloader,i14.RouterPreloader,[i14.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i14.PreloadingStrategy]),i0.ɵmpd(4608,i14.PreloadAllModules,
              i14.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i14.ROUTER_INITIALIZER,
              i14.ɵi,[i14.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i14.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i15.CommentsService,i15.CommentsService,
              [i12.Http]),i0.ɵmpd(512,i10.CommonModule,i10.CommonModule,([] as any[])),
          i0.ɵmpd(1024,i0.ErrorHandler,i11.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,
              () => {
                return [i14.ɵb()];
              },([] as any[])),i0.ɵmpd(256,i0.APP_ID,'cli-universal-demo',([] as any[])),
          i0.ɵmpd(2048,i11.ɵTRANSITION_ID,(null as any),[i0.APP_ID]),i0.ɵmpd(512,i14.ɵg,
              i14.ɵg,[i0.Injector]),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any,
              p1_0:any,p1_1:any,p1_2:any,p2_0:any) => {
            return [i11.ɵc(p0_0,p0_1),i11.ɵf(p1_0,p1_1,p1_2),i14.ɵh(p2_0)];
          },[[2,i11.NgProbeToken],[2,i0.NgProbeToken],i11.ɵTRANSITION_ID,i10.DOCUMENT,
              i0.Injector,i14.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,
              [[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,
              i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),
          i0.ɵmpd(2048,i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i11.BrowserModule,
              i11.BrowserModule,[[3,i11.BrowserModule]]),i0.ɵmpd(1024,i14.ɵa,i14.ɵd,
              [[3,i14.Router]]),i0.ɵmpd(512,i14.UrlSerializer,i14.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i14.ChildrenOutletContexts,i14.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i14.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i10.LocationStrategy,i14.ɵc,[i10.PlatformLocation,[2,i10.APP_BASE_HREF],
              i14.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i10.Location,i10.Location,[i10.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i14.ROUTES,() => {
            return [[{path:'',component:i16.LandingPageComponent},{path:'login-page',
                component:i17.LoginPageComponent},{path:'sign-up',component:i18.SignUpComponent},
                {path:'about-page',component:i19.AboutPageComponent},{path:'users-page/:id',
                    component:i20.UsersPageComponent},{path:'profile-page',component:i21.ProfilePageComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i14.Router,i14.ɵe,[i0.ApplicationRef,i14.UrlSerializer,
              i14.ChildrenOutletContexts,i10.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i14.ROUTES,i14.ROUTER_CONFIGURATION,[2,i14.UrlHandlingStrategy],
              [2,i14.RouteReuseStrategy]]),i0.ɵmpd(512,i14.RouterModule,i14.RouterModule,
              [[2,i14.ɵa],[2,i14.Router]]),i0.ɵmpd(512,i12.HttpModule,i12.HttpModule,
              ([] as any[])),i0.ɵmpd(512,i13.ɵba,i13.ɵba,([] as any[])),i0.ɵmpd(512,
              i13.FormsModule,i13.FormsModule,([] as any[])),i0.ɵmpd(512,i1.AppModule,
              i1.AppModule,([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3phY2htYXJheml0aS9EZXNrdG9wL3dkaS13b3JrL3Byb2plY3RzL3lva2VsL3NyYy9hcHAvYXBwLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy96YWNobWFyYXppdGkvRGVza3RvcC93ZGktd29yay9wcm9qZWN0cy95b2tlbC9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
