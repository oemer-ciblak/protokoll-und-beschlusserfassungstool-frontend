import { Injectable } from '@angular/core';
import { KeycloakService } from "keycloak-angular";
import { KeycloakProfile, KeycloakTokenParsed } from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) { }

  public getLoggedUser(): KeycloakTokenParsed | undefined {
    try {
      const userDetails: KeycloakTokenParsed | undefined = this.keycloakService.getKeycloakInstance().idTokenParsed;
      return userDetails;
    } catch (e) {
      console.error("Exception while getting logged user details", e);
      return undefined;
    }
  }

  public isLoggedIn(): Promise<boolean> {
    return this.keycloakService.isLoggedIn()
  }

  public loadUserProfile(): Promise<KeycloakProfile> {
    return this.keycloakService.loadUserProfile();
  }

  public login(): void {
    this.keycloakService.login()
  }

  public logout(): void {
    this.keycloakService.logout(window.location.origin)
  }

  public redirectToProfile(): void {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  public  getRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }
}

