import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RemoteRouterService } from 'app/remote-route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  routes: Route[] = [];

  constructor(
    private router: Router,
    private remoteRouterService: RemoteRouterService
  ) {
    router.resetConfig([]);
  }

  handleLogin(name: string): void {
    this.remoteRouterService.getRoutes(name).subscribe(routes => {
      this.routes = routes;
      this.loggedIn = true;
    });
  }
}
