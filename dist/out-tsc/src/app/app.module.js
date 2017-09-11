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
var aspen_component_1 = require("./aspen/aspen.component");
var beaver_creek_component_1 = require("./beaver-creek/beaver-creek.component");
var denver_component_1 = require("./denver/denver.component");
var fort_collins_component_1 = require("./fort-collins/fort-collins.component");
var telluride_component_1 = require("./telluride/telluride.component");
var vail_component_1 = require("./vail/vail.component");
var appRoutes = [
    { path: '', component: landing_page_component_1.LandingPageComponent },
    { path: 'login-page', component: login_page_component_1.LoginPageComponent },
    { path: 'sign-up', component: sign_up_component_1.SignUpComponent },
    { path: 'about-page', component: about_page_component_1.AboutPageComponent },
    { path: 'users-page', component: users_page_component_1.UsersPageComponent },
    { path: 'profile-page', component: profile_page_component_1.ProfilePageComponent },
    { path: 'vail', component: vail_component_1.VailComponent },
    { path: 'telluride', component: telluride_component_1.TellurideComponent },
    { path: 'beaver-creek', component: beaver_creek_component_1.BeaverCreekComponent },
    { path: 'fort-collins', component: fort_collins_component_1.FortCollinsComponent },
    { path: 'denver', component: denver_component_1.DenverComponent },
    { path: 'aspen', component: aspen_component_1.AspenComponent }
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
                    comment_location_component_1.CommentLocationComponent,
                    aspen_component_1.AspenComponent,
                    beaver_creek_component_1.BeaverCreekComponent,
                    denver_component_1.DenverComponent,
                    fort_collins_component_1.FortCollinsComponent,
                    telluride_component_1.TellurideComponent,
                    vail_component_1.VailComponent
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