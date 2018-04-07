import { ProfileCreateRoutingModule } from './profile-create.routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProfileCreateComponent } from './profile-create.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileCreateRoutingModule
  ],
  declarations: [
    ProfileCreateComponent
  ],
  exports: [
    ProfileCreateComponent
  ]
})
export class ProfileCreateModule { }
