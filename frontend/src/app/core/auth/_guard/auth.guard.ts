import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../_services/auth.service";
import {Constants} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // @ts-ignore
  constructor(
    private _router : Router,
    private authService: AuthService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.authService.currentUserValue;
    if (currentUser) return true;
    this._router.navigate([Constants.UrlLogin], {queryParams: {returnUrl: state.url}})
    return false
  }
  
}
