import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProtocolCreateViewModel, ProtocolUpdateViewModel, ProtocolViewModel } from "./protocol.model";
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private http: HttpClient) { }

  private url = "https://51ad-2a02-3035-812-4177-f9e2-8720-5a2-7155.eu.ngrok.io";
  private localUrl = "http://localhost:8081";
  private protocols = new Subject<ProtocolViewModel[]>();

  getPopupSource() {
    return this.protocols.asObservable();
  }

  getAllProtocols() {
    return this.http.get<ProtocolViewModel[]>(`${this.localUrl}/api/protokoll`);
  }

  createProtocol(protocol: ProtocolCreateViewModel) {
    return this.http.post<ProtocolViewModel>(`${this.localUrl}/api/protokoll/create`, protocol);
  }

  getProtocolById(id: number) {
    return this.http.get<ProtocolViewModel>(`${this.localUrl}/api/protokoll/${id}`);
  }

  updateProtocol(id: number, protocol: ProtocolUpdateViewModel) {
    return this.http.put<ProtocolViewModel>(`${this.localUrl}/api/protokoll/update/${id}`, protocol);
  }

  deleteProtocol(id: number) {
    return this.http.delete(`${this.localUrl}/api/protokoll/delete/${id}`);
  }

  findProtocolsByWord(word: string) {
    this.http.get<ProtocolViewModel[]>(`${this.localUrl}/api/protokoll/findbyword/${word}`).subscribe(protocols => {
      this.protocols.next(protocols);
    });
  }

  changeStatusToDone(id: number) {
    return this.http.get<ProtocolViewModel>(`${this.localUrl}/api/protokoll/changestatustodone/${id}`);
  }
}
