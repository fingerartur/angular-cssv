import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-create/profile.service';

@Component({
  selector: 'app-profile-export',
  templateUrl: './profile-export.component.html',
  styleUrls: ['./profile-export.component.css']
})
export class ProfileExportComponent {

  date: string;
  name: string;

  constructor(
    private profileService: ProfileService
  ) {
    this.name = this.profileService.getName();
    this.profileService.subscribeToName(name => {
      this.name = name;
    });
    this.date = new Date().toDateString();
  }

}
