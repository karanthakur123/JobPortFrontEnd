import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { UserServiceService } from "../user-service.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private authService: UserServiceService,
		private router: Router) { }
    IsLoggedIn()
    {
      return localStorage.getItem("login")
    }
	canActivate(){
   
		var isAuthenticated =false
    let islogin=localStorage.getItem("login")
		if (islogin=='true') {
      isAuthenticated=true;
		}
		return isAuthenticated;
	}
}
