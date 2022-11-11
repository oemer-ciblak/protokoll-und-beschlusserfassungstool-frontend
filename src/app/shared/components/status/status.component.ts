import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'probeto-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input() status: string = "OPEN";

  get statusText(): string {
    return this.status == "OPEN" ? "Offen" : "Geschlossen";
  }

  constructor() { }

  ngOnInit(): void {
  }

  get getColor(): string {
    return this.status == "OPEN" ? "primary" : "accent";
  }

}
