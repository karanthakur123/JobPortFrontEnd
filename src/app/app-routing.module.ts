import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavePostComponent } from './save-post/save-post.component';
import { AuthGuard } from './services/auth.guard';
import { UserDashBboardComponent } from './user-dash-bboard/user-dash-bboard.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  {
    path: 'userDashBoard',
    component: UserDashBboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'savePost',
    component: SavePostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'userRegistration',
    component: UserRegistrationComponent
  },
  {
    path: '',
    component: UserLoginPageComponent
  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }
