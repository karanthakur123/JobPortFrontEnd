import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashBboardComponent } from './user-dash-bboard/user-dash-bboard.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SavePostComponent } from './save-post/save-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashBboardComponent,
    UserLoginPageComponent,
    UserRegistrationComponent,
    SavePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
