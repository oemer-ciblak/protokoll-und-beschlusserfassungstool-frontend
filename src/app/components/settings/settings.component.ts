import { Component, OnInit } from '@angular/core';
import { SettingsService } from "../../shared/services/settings.service";
import { SettingsViewModel } from "../../shared/models/settings.model";

@Component({
  selector: 'probeto-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  settings: SettingsViewModel = {
    schulleiter: "",
    stellverteter: ""
  }

  ngOnInit(): void {
    this.settingsService.getSettings().subscribe(settings => {
      this.settings.schulleiter = settings.schulleiter;
      this.settings.stellverteter = settings.stellverteter;
      this.settings.id = settings.id;
    });
  }

  updateSettings() {
    const updatedSettings = {
      id: this.settings.id,
      schulleiter: this.settings.schulleiter,
      stellverteter: this.settings.stellverteter
    }

    console.log(updatedSettings);

    this.settingsService.updateSettings(updatedSettings).subscribe(settings => {
      this.settings = settings;
    });
  }

}
