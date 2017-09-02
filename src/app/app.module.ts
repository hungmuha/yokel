import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommentsService } from './users-page/comments.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { CommentLocationComponent } from './comment-location/comment-location.component';

const appRoutes: Routes = [
  
  { path: '', component: LandingPageComponent},
  { path: 'login-page', component: LoginPageComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'about-page', component: AboutPageComponent },
  { path: 'users-page', component: UsersPageComponent},
  { path: 'profile-page', component: ProfilePageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    SignUpComponent,
    NavBarComponent,
    AboutPageComponent,
    LoginPageComponent,
    LandingPageComponent,
    ProfilePageComponent,
    CommentLocationComponent
  ],
  imports: [
  BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
  RouterModule.forRoot(
    appRoutes
    ),
  HttpModule
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
