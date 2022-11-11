import { Component, OnInit } from '@angular/core';
import { ProtocolViewModel } from "./protocol.model";
import { ProtocolDialogComponent } from "./components/file-card/components/protocol-dialog/protocol-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { CreateProtocolDialogComponent } from "./components/create-protocol-dialog/create-protocol-dialog.component";
import { OverviewService } from "./overview.service";

@Component({
  selector: 'probeto-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  // protocols: Array<ProtocolViewModel> = [
  //   {
  //     id: 1,
  //     title: "Protocol 1",
  //     description: "This is a description of protocol 1",
  //     creationDate: new Date(),
  //     doneDate: null,
  //     status: ProtocolStatusEnum.Done,
  //     author: "Ömer Ciblak",
  //     participants: [
  //       "Ömer Ciblak",
  //       "Franz Hennig",
  //     ],
  //     agendaItems: [
  //       {
  //         id: 1,
  //         title: "Agenda item 1",
  //         decision: "This is a decision of agenda item 1",
  //       },
  //       {
  //         id: 2,
  //         title: "Agenda item 2",
  //         decision: "This is a decision of agenda item 2",
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: "Protocol 2",
  //     description: "This is a description of protocol 2",
  //     creationDate: new Date(),
  //     doneDate: null,
  //     status: ProtocolStatusEnum.Open,
  //     author: "Franz Hennig",
  //     participants: [
  //       "Franz Hennig",
  //     ],
  //     agendaItems: [
  //       {
  //         id: 1,
  //         title: "Agenda item 1",
  //         decision: "This is a decision of agenda item 1",
  //       },
  //       {
  //         id: 2,
  //         title: "Agenda item 2",
  //         decision: "This is a decision of agenda item 2",
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: "Protocol 2",
  //     description: "This is a description of protocol 2",
  //     creationDate: new Date(),
  //     doneDate: null,
  //     status: ProtocolStatusEnum.Open,
  //     author: "Franz Hennig",
  //     participants: [
  //       "Franz Hennig",
  //     ],
  //     agendaItems: [
  //       {
  //         id: 1,
  //         title: "Agenda item 1",
  //         decision: "This is a decision of agenda item 1",
  //       },
  //       {
  //         id: 2,
  //         title: "Agenda item 2",
  //         decision: "This is a decision of agenda item 2",
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: "Protocol 2",
  //     description: "This is a description of protocol 2",
  //     creationDate: new Date(),
  //     doneDate: null,
  //     status: ProtocolStatusEnum.Open,
  //     author: "Franz Hennig",
  //     participants: [
  //       "Franz Hennig",
  //     ],
  //     agendaItems: [
  //       {
  //         id: 1,
  //         title: "Agenda item 1",
  //         decision: "This is a decision of agenda item 1",
  //       },
  //       {
  //         id: 2,
  //         title: "Agenda item 2",
  //         decision: "This is a decision of agenda item 2",
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: "Protocol 2",
  //     description: "This is a description of protocol 2",
  //     creationDate: new Date(),
  //     doneDate: null,
  //     status: ProtocolStatusEnum.Open,
  //     author: "Franz Hennig",
  //     participants: [
  //       "Franz Hennig",
  //     ],
  //     agendaItems: [
  //       {
  //         id: 1,
  //         title: "Agenda item 1",
  //         decision: "This is a decision of agenda item 1",
  //       },
  //       {
  //         id: 2,
  //         title: "Agenda item 2",
  //         decision: "This is a decision of agenda item 2",
  //       }
  //     ]
  //   },
  // ];

  protocols: Array<ProtocolViewModel> = [];

  constructor(private dialog: MatDialog, private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.overviewService.findProtocolsByWord("oemerfranzguido");

    this.overviewService.getPopupSource().subscribe(protocols => {
      this.protocols = protocols;
    });
  }

  openDialog() {
    this.dialog.open(CreateProtocolDialogComponent, {
      disableClose: true,
      width: '80%',
    });
  }
}
