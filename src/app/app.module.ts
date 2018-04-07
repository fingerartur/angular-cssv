import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './base/main/main.component';
import { AppComponent } from './app.component';
import { MainModule } from './base/main/main.module';
import { RouterModule } from '@angular/router';

import { allRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule, // contains comomn module (angular directives) + initializes browser
    FormsModule,
    RouterModule.forRoot(allRoutes), // seems necessary for routing to work after resetConfig()

    // Use forRoot() in the AppRoutingModule—that is, one time in the app at the root level.
    // Actually it seems that it MUST be app.module.ts ...
    MainModule,
  ],
  declarations: [
    LoginComponent,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
