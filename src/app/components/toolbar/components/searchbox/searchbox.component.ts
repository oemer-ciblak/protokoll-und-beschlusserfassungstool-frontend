import { Component, OnInit } from '@angular/core';
import { OverviewService } from "../../../../pages/overview/overview.service";

@Component({
  selector: 'probeto-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  value = 'Clear me';
  search : string ="";

  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
  }

  searchProtocols(): void {
    this.overviewService.findProtocolsByWord(this.search === "" ? "oemerfranzguido" : this.search);
  }

}
