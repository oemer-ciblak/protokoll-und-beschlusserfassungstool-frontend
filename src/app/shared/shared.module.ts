import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from "./modules/material-ui.module";
import { StatusComponent } from './components/status/status.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    StatusComponent,
  ],
  imports: [
    CommonModule,
    MaterialUiModule
  ],
  exports: [
    MaterialUiModule,
    StatusComponent
  ]
})
export class SharedModule { }
