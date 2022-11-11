import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from "./overview-routing.module";
import { FileCardComponent } from './components/file-card/file-card.component';
import { SharedModule } from "../../shared/shared.module";
import { ProtocolDialogComponent } from './components/file-card/components/protocol-dialog/protocol-dialog.component';
import { CreateProtocolDialogComponent } from './components/create-protocol-dialog/create-protocol-dialog.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxMatDatetimePickerModule } from "@angular-material-components/datetime-picker";

@NgModule({
  declarations: [
    OverviewComponent,
    FileCardComponent,
    ProtocolDialogComponent,
    CreateProtocolDialogComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    OverviewRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMatDatetimePickerModule
  ],
  providers: [
  ]
})
export class OverviewModule { }
