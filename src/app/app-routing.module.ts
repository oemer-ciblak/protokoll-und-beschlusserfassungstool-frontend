import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth/auth.guard";
import { SettingsComponent } from "./components/settings/settings.component";

const routes: Routes = [
  {
    path: 'overview',
    loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
