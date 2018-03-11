import { Component } from '@angular/core';
import {ActivatedRoute, Data, Event, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private _isLoginScreen: boolean = false;
  public get isLogin(): boolean { return this._isLoginScreen; }
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
      }

      if (event instanceof NavigationEnd) {
        this._isLoginScreen = !!this.activatedRoute.root.children[0].snapshot.data.isLogin;
      }

      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });

  }
}
