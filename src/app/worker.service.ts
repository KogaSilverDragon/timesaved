import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { environment } from '../environments/environment';

@Injectable()
export class WorkerService {

  constructor(private http: HttpClient) { }

  getWorkerActivity(): Observable<any> {
    return this.http.get<any>(environment.workerActivityURL);
  }
}
