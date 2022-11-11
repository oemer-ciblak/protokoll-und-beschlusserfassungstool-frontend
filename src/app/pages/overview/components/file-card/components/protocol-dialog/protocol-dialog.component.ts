import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import jsPDF from 'jspdf';
import { FormControl } from "@angular/forms";
import { AuthService } from "../../../../../../auth/service/auth.service";
import { SettingsService } from "../../../../../../shared/services/settings.service";
import { SettingsViewModel } from "../../../../../../shared/models/settings.model";
import { ProtocolUpdateViewModel, ProtocolViewModel } from "../../../../protocol.model";
import { OverviewService } from "../../../../overview.service";
import {
  ConfirmationDialogComponent
} from "../../../../../../shared/components/confirmation-dialog/confirmation-dialog.component";
import { filter } from "rxjs";
import { ParticipantViewModel } from "../../../../../../shared/models/participant.model";
import { ParticipantService } from "../../../../../../shared/services/participant.service";

@Component({
  selector: 'probeto-protocol-dialog',
  templateUrl: './protocol-dialog.component.html',
  styleUrls: ['./protocol-dialog.component.scss']
})
export class ProtocolDialogComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  author = "";
  panelOpenState = false;
  participants = new FormControl('');
  conferenceType = new FormControl('');
  agendaItemTitle = "";
  schoolYear = 1990;
  conferenceTypes: string[] = [
    'Lehrerkonferenz',
    'Abteilungskonferenz',
  ];

  settings: SettingsViewModel = {
    stellverteter: "",
    schulleiter: "",
  }

  curDate = new Date();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProtocolViewModel,
              private authService: AuthService,
              private settingsService: SettingsService,
              private overviewService: OverviewService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              private participantService: ParticipantService) {}

  ngOnInit(): void {
    this.getCurrentUsersFullName();
    this.settingsService.getSettings().subscribe(settings => {
      this.settings = settings;
    });
  }

  getCurrentUsersFullName() {
    this.authService.loadUserProfile().then(profile => {
      this.author =  profile.firstName + " " + profile.lastName;
    })
  }

  addAgendaItem() {
    this.data.agendaItems.push({title: this.agendaItemTitle, notes: "", decision: ""})
  }

  get participantsText(): string {
    return this.data.participants.map(participant => {
      return participant.firstname + " " + participant.lastname
    }).join(", ");
  }

  get isDone(): boolean {
    return this.data.status === "DONE";
  }

  public openPDF(): void {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.htmlData.nativeElement, {
      autoPaging: true,
      x: -15,
      y: 0,
      html2canvas: {
        scale: 0.7,
      },
      callback: (pdf) => {
        pdf.save(`Protokoll_Bereichskonferenz_IT_${this.curDate.getFullYear()}_${this.curDate.getMonth()}_${this.curDate.getDay()}_${this.author}.pdf`);
      }
    });
  }

  public changeStatusToDone(): void {
    this.overviewService.changeStatusToDone(this.data.id).subscribe(() => {
      window.location.reload();
    });
  }

  public updateProtocol(): void {
    console.log(this.data);
    let updatedModel: ProtocolUpdateViewModel = {
      title: this.data.title,
      description: this.data.description,
      author: this.data.author,
      conferenceType: this.conferenceType.value?.toUpperCase() ?? "",
      schoolYearBeginn: this.data.schoolYearBeginn,
      leader: this.data.leader,
      room: this.data.room,
      meetingStart: this.data.meetingStart,
      meetingEnd: this.data.meetingEnd,
      agendaItems: this.data.agendaItems,
      participants: this.data.participants,
    }

    this.overviewService.updateProtocol(this.data.id, updatedModel).subscribe(() => {
      window.location.reload();
    });
  }

  deleteAgendaItem(id: number | undefined) {
    this.data.agendaItems = this.data.agendaItems.filter((agendaItem) => agendaItem.id !== id);
  }

  public deleteProtocol(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'B') {
        this.overviewService.deleteProtocol(this.data.id).subscribe(() => {
          window.location.reload();
        });
      }
    });
  }
}
