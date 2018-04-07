import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  password = '';
  @Output() login = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  logIn(): void {
    this.login.emit( this.name );
  }

}
