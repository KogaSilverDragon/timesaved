import { Component, OnInit } from '@angular/core';
import {WorkerService} from "../worker.service";

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  workerActivity: any;
  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    this.workerService.getWorkerActivity().toPromise().then(
      data => {
        this.workerActivity = data.job_activity[0];
        this.workerActivity.status = this.workerActivity.status.sort((status1, status2) => {
          return status1.date < status2.date;
        });
      },
      error => console.error(error)
    );
  }

}
