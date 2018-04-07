import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-group',
  template: `
    <span class="container">
      <img src="assets/cog-icon.png"/>
      <span class="settings">settings</span>
    </span>
  `,
  styleUrls: [
    './icon-group.component.css'
  ]
})
export class IconGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
