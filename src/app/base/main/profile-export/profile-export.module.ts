import { IconGroupComponent } from './icon-group.component';
import { ProfileExportComponent } from './profile-export.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProfileExportRoutingModule } from './profile-export.routing-module';
import { GroupComponent } from './group/group.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileExportRoutingModule
  ],
  declarations: [
    ProfileExportComponent,
    GroupComponent,
    IconGroupComponent
  ],
  exports: [
    ProfileExportComponent
  ]
})
export class ProfileExportModule { }
