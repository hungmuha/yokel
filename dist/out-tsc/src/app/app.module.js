"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var users_page_component_1 = require("./users-page/users-page.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var about_page_component_1 = require("./about-page/about-page.component");
var ng2_dropdown_1 = require("ng2-dropdown");
var landing_page_component_1 = require("./landing-page/landing-page.component");
var comments_service_1 = require("./comments.service");
var appRoutes = [
    { path: '', component: landing_page_component_1.LandingPageComponent },
    { path: 'about-page', component: about_page_component_1.AboutPageComponent },
    { path: 'users-page', component: users_page_component_1.UsersPageComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    app_component_1.AppComponent,
                    users_page_component_1.UsersPageComponent,
                    nav_bar_component_1.NavBarComponent,
                    about_page_component_1.AboutPageComponent,
                    landing_page_component_1.LandingPageComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule.withServerTransition({ appId: 'cli-universal-demo' }),
                    ng2_dropdown_1.DropdownModule,
                    router_1.RouterModule.forRoot(appRoutes),
                ],
                providers: [comments_service_1.CommentsService],
                bootstrap: [app_component_1.AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map