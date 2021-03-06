"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var users_page_component_1 = require("./users-page/users-page.component");
var sign_up_component_1 = require("./sign-up/sign-up.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var about_page_component_1 = require("./about-page/about-page.component");
var login_page_component_1 = require("./login-page/login-page.component");
var landing_page_component_1 = require("./landing-page/landing-page.component");
var profile_page_component_1 = require("./profile-page/profile-page.component");
var comment_location_component_1 = require("./comment-location/comment-location.component");
var comments_service_1 = require("./users-page/comments.service");
var appRoutes = [
    { path: '', component: landing_page_component_1.LandingPageComponent },
    { path: 'login-page', component: login_page_component_1.LoginPageComponent },
    { path: 'sign-up', component: sign_up_component_1.SignUpComponent },
    { path: 'about-page', component: about_page_component_1.AboutPageComponent },
    { path: 'users-page/:id', component: users_page_component_1.UsersPageComponent },
    { path: 'profile-page', component: profile_page_component_1.ProfilePageComponent }
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
                    sign_up_component_1.SignUpComponent,
                    nav_bar_component_1.NavBarComponent,
                    about_page_component_1.AboutPageComponent,
                    login_page_component_1.LoginPageComponent,
                    landing_page_component_1.LandingPageComponent,
                    profile_page_component_1.ProfilePageComponent,
                    comment_location_component_1.CommentLocationComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule.withServerTransition({ appId: 'cli-universal-demo' }),
                    router_1.RouterModule.forRoot(appRoutes),
                    http_1.HttpModule,
                    forms_1.FormsModule,
                    common_1.CommonModule
                ],
                providers: [comments_service_1.CommentsService],
                bootstrap: [app_component_1.AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map