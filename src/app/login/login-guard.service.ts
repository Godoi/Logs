import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from '../auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLogged()) {
      return true;
    }
    if (this.authService.redirectUrl) {
      this.router.navigate([this.authService.redirectUrl]);
      return false;
    }
    this.router.navigate(['/change']);
    return false;
  }
}