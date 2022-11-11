import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { AgendaItemViewModel, ProtocolCreateViewModel, ProtocolViewModel } from "../../protocol.model";
import { AuthService } from "../../../../auth/service/auth.service";
import { OverviewService } from "../../overview.service";
import { ParticipantViewModel } from "../../../../shared/models/participant.model";
import { ParticipantService } from "../../../../shared/services/participant.service";

@Component({
  selector: 'probeto-create-protocol-dialog',
  templateUrl: './create-protocol-dialog.component.html',
  styleUrls: ['./create-protocol-dialog.component.scss']
})
export class CreateProtocolDialogComponent implements OnInit {

  panelOpenState = false;

  author = "";
  schoolYear = 1990;
  title = "";
  participants = new FormControl('');
  conferenceType = new FormControl('');
  agendaItemTitle = "";
  description = "";
  leader = "";
  room = "";
  agendaItems:  Array<AgendaItemViewModel> = [];
  meetingStart = "";
  meetingEnd = "";

  notes = "";
  decision = "";


  protocolToCreate = {};

  conferenceTypes: string[] = [
    'Lehrerkonferenz',
    'Abteilungskonferenz',
  ];

  participantsList: ParticipantViewModel[] = [];
  selectedParticipants: ParticipantViewModel[] = [];

  constructor(private authService: AuthService,
              private overviewService: OverviewService,
              private participantService: ParticipantService) { }

  createProtocol() {
    let protocol: ProtocolCreateViewModel = {
      title: this.title,
      description: this.description,
      status: "OPEN",
      author: this.author,
      conferenceType: this.conferenceType.value?.toUpperCase() ?? "",
      schoolYearBeginn: this.schoolYear,
      leader: this.leader,
      room: this.room,
      meetingStart: this.meetingStart,
      meetingEnd: this.meetingEnd,
      agendaItems: this.agendaItems,
      participants: this.selectedParticipants,
    }

    console.log(protocol);

    this.overviewService.createProtocol(protocol).subscribe((protocol: ProtocolViewModel) => {
      window.location.reload();
      console.log(protocol);
    });
  }

  changeParticipants(event: any) {
    event.forEach((participant: ParticipantViewModel) => {
      this.selectedParticipants.push({firstname: participant.firstname, lastname: participant.lastname, role: participant.role});
    });
  }

  deleteAgendaItem(id: number | undefined) {
    this.agendaItems = this.agendaItems.filter((agendaItem) => agendaItem.id !== id);
  }


  getCurrentUsersFullName() {
    this.authService.loadUserProfile().then(profile => {
      this.author =  profile.firstName + " " + profile.lastName;
    })
  }

  ngOnInit(): void {
    this.participantService.getAll().subscribe(participants => {
      this.participantsList = participants;
    });
    this.getCurrentUsersFullName();

    console.log(this.authService.getRoles());

  }

  addAgendaItem() {
    this.agendaItems.push({title: this.agendaItemTitle, notes: "", decision: ""})
  }

}
