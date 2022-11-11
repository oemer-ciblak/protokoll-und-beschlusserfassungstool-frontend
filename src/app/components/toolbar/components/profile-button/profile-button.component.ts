import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from "keycloak-js";
import { AuthService } from "../../../../auth/service/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { SettingsComponent } from "../../../settings/settings.component";

@Component({
  selector: 'probeto-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent implements OnInit {

  fullName: string = "";

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCurrentUsersFullName();
  }

  openDialog(): void {
    this.dialog.open(SettingsComponent, {
      disableClose: true,
    });
  }

  logout(): void {
    this.authService.logout();
  }

  getCurrentUsersFullName() {
    this.authService.loadUserProfile().then(profile => {
      this.fullName =  profile.firstName + " " + profile.lastName;
    })
  }

}
