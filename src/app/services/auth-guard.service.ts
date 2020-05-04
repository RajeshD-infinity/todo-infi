import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
    console.log('auth started')
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    console.log('chekc user')
    const userData = localStorage.getItem("user");
    if (!userData) {
      console.log('false')
      this.router.navigate(['/login']);
      return false;
    } else {
      console.log('true')
      return true;
    }
  }

}
