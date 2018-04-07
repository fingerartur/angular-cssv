import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Route } from '@angular/router';
import { routes0, routes1, allRoutes } from './routes';

export class RemoteRouterService {
  getRoutes(customerName: string): Observable<Route[]> {
    let result = routes0;
    if (customerName === '1') {
      result = routes1;
    }
    return Observable.of(result).delay(1000);
  }
}
