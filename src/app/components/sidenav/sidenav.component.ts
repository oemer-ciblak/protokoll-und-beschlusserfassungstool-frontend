import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from "./sidenav.service";
import { ProtocolViewModel } from "../../pages/overview/protocol.model";
import { OverviewService } from "../../pages/overview/overview.service";

@Component({
  selector: 'probeto-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer') drawer : any;

  protocolList: ProtocolViewModel[] = [];

  constructor(private sidenavService: SidenavService, private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.sidenavService.sidenav.subscribe(() => {
      this.drawer.toggle();
    });

    this.overviewService.getPopupSource().subscribe(protocols => {
      this.protocolList = protocols;
    });
  }
}
