import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { ScrollbarModule } from 'ngx-scrollbar';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {WorkerService} from "./worker.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    JobsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ScrollbarModule,
    RoundProgressModule,
  ],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
