import { ProfileService } from './profile.service';
import { ProfileCreateClass } from './profile-create.class';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent extends ProfileCreateClass {
  temporaryName: string;
  name = '';

  constructor(
    private profileService: ProfileService
  ) {
    super();
    this.name = profileService.getName();
    profileService.subscribeToName((name) => {
      this.name = name;
    });
  }

  setTemporaryName(event: KeyboardEvent): void {
    this.temporaryName = (event.target as HTMLInputElement).value;
  }

  saveName(): void {
    console.log(this.temporaryName);
    this.profileService.setName(this.temporaryName);
  }
}
