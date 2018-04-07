import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brush',
  template: `
      <img src="assets/paintbrush.png"/>
  `,
  styles: [
    `
      img {
        display: inline;
        width: 20px;
      }
    `
  ]
})
export class BrushComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
