import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule } from "@angular/forms";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavService } from "./components/sidenav/sidenav.service";
import { FileTreeviewComponent } from './components/sidenav/components/file-treeview/file-treeview.component';
import { SearchboxComponent } from './components/toolbar/components/searchbox/searchbox.component';
import { AuthModule } from "./auth/auth.module";
import { ProfileButtonComponent } from './components/toolbar/components/profile-button/profile-button.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsService } from "./shared/services/settings.service";
import { ConfirmationDialogComponent } from "./shared/components/confirmation-dialog/confirmation-dialog.component";
import { OverviewService } from "./pages/overview/overview.service";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    FileTreeviewComponent,
    SearchboxComponent,
    ProfileButtonComponent,
    SettingsComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    AuthModule,
  ],
  providers: [
    SidenavService,
    SettingsService,
    OverviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
