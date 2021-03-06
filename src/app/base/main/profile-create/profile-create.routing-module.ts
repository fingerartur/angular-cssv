import { ProfileCreateComponent } from './profile-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/**
 * This file brings no added value.
 *
 * This dedicated routing module like this is necessary for lazy-loaded feature modules to work.
 * (That's how Angular works)
 */
const routes: Routes = [
  {
    path: '',
    component: ProfileCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // RouterModule.forChild(routes) to feature routing modules. This way, Angular knows that
  // the route list is only responsible for providing additional routes and is intended for feature modules.
  exports: [RouterModule]
})
export class ProfileCreateRoutingModule { }
