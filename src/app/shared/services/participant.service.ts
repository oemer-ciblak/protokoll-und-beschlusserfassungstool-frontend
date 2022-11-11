import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ParticipantViewModel } from "../models/participant.model";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private localUrl = "http://localhost:8081";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ParticipantViewModel[]>(`${this.localUrl}/api/participants`);
  }
}
