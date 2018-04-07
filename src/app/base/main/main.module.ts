import { ProfileExportComponent } from './profile-export/profile-export.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EditorComponent } from './editor/editor.component';
import { RemoteRouterService } from 'app/remote-route.service';
import { ProfileService } from './profile-create/profile.service';

@NgModule({
  imports: [
    CommonModule, // a weaker version of browser module (browser module should be imported only once - in the root module)
    RouterModule.forChild([]),
  ],
  declarations: [
    MainComponent,
    HomeComponent,
    EditorComponent,
    ErrorComponent
  ],
  providers: [
    RemoteRouterService,
    ProfileService  // submodules have access to this (shared) service
  ],
  exports: [ MainComponent ]
})
export class MainModule { }
