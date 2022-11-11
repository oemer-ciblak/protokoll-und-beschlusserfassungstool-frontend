import { Component, Input, OnInit } from '@angular/core';
import {ProtocolViewModel } from "../../protocol.model";
import { MatDialog } from "@angular/material/dialog";
import { ProtocolDialogComponent } from "./components/protocol-dialog/protocol-dialog.component";

@Component({
  selector: 'probeto-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent implements OnInit {

  @Input() protocol!: ProtocolViewModel;

  get participantsText(): string {
    return this.protocol.participants.join(', ');
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ProtocolDialogComponent, {
      disableClose: true,
      data: this.protocol,
      width: '80%',
    });
  }
}
