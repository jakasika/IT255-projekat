import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class  AdminAuthGuard implements CanActivate {

constructor(
  private auth: AuthService, 
  private userService: UserService,     
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
      return this.auth.userData$
      .pipe(switchMap(user => this.userService.get(user.uid).valueChanges()))
      .pipe(map(user => user.isAdmin));
    
  }
}
