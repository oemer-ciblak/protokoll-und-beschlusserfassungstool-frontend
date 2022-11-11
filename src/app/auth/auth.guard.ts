import { Injectable } from "@angular/core";
import { KeycloakAuthGuard, KeycloakService } from "keycloak-angular";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable()
export class AuthGuard extends KeycloakAuthGuard {

  constructor(protected override router: Router,
              protected override keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (!this.authenticated) {
      await this.keycloakAngular.login({
        redirectUri: window.location.origin + state.url
      })
    }

    // @ts-ignore
    const requiredRoles = route.data.roles;

    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    return requiredRoles.every(role => this.roles.includes(role));
  }
}
