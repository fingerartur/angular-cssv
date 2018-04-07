import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-group',
  template: `
    <span class="container">
      <img src="assets/cog-icon.png"/>
      <app-brush></app-brush>
    </span>
  `,
  styleUrls: [
    '../../../base/main/profile-export/icon-group.component.css',
    './icon-group.component.css'
  ]
})
export class IconGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
