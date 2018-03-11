import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public openJobsWeek: any;
  public openJobsMonth: any;
  public appNotInstalled: any;
  public unverifiedWorkers: any;

  constructor() { }

  ngOnInit() {
    this.openJobsWeek = {
      current: 20,
      total: 50
    };
    this.openJobsMonth = {
      current: 30,
      total: 50
    };
    this.appNotInstalled = {
      current: 5,
      total: 100
    };
    this.unverifiedWorkers = {
      current: 5,
      total: 100
    };
  }

}
