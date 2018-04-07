import { RemoteRouterService } from 'app/remote-route.service';
import { Router, Route } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() routes: Route[];

  constructor(
    private router: Router,
    private remoteRouterService: RemoteRouterService
  ) {}

  ngOnInit() {
    this.router.resetConfig(this.routes);
    console.log(this.router.config);
  }

  goHome(): void {
    window.location.href = '';
  }

  gotoProfileCreate(): void {
    this.router.navigate(['profile/create']);
  }

  gotoProfileExport(): void {
    this.router.navigate(['profile/export']);
  }
}
