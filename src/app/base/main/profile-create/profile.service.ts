import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/defer';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
  private name: string;
  private nameSubject = new Subject<string>();

  setName(name: string): void {
    this.name = name;
    this.nameSubject.next(name);
  }

  getName(): string {
    return this.name;
  }

  subscribeToName(callback: (value: string) => void): void {
    this.nameSubject.subscribe(callback);
  }

}
