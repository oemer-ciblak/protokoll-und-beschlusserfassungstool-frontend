import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SettingsViewModel } from "../models/settings.model";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private localUrl = "http://localhost:8081";

  constructor(private http: HttpClient) { }

  updateSettings(settings: SettingsViewModel) {
    return this.http.put<SettingsViewModel>(`${this.localUrl}/api/settings/update/${settings.id}`, settings);
  }

  getSettings() {
    return this.http.get<SettingsViewModel>(`${this.localUrl}/api/allsettings`);
  }
}
