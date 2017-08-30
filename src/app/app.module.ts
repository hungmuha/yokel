import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  
  { path: '', component: LandingPageComponent},
  { path: 'login-page', component: LoginPageComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'about-page', component: AboutPageComponent },
  { path: 'users-page', component: UsersPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    SignUpComponent,
    NavBarComponent,
    AboutPageComponent,
    LoginPageComponent,
    LandingPageComponent
  ],
  imports: [
  BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
  RouterModule.forRoot(
    appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
