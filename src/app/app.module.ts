import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { UsersPageComponent } from './users-page/users-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import {DropdownModule} from "ng2-dropdown";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommentsService } from './comments.service';

const appRoutes: Routes = [
  
  { path: '', component: LandingPageComponent},
  { path: 'about-page', component: AboutPageComponent },
  { path: 'users-page', component: UsersPageComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
   
    NavBarComponent,
    AboutPageComponent,
    
    LandingPageComponent
  ],
  imports: [
  BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
  DropdownModule,
  RouterModule.forRoot(
    appRoutes
    ),
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
