import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  sidenav = new Subject<void>();

  constructor() { }

  public toggle() {
    this.sidenav.next();
  }
}
