import { Component, OnInit } from '@angular/core';
import { SidenavService } from "../sidenav/sidenav.service";

@Component({
  selector: 'probeto-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

}
