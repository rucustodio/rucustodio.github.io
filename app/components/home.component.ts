import { Component } from '@angular/core';
import {RouterService} from './router.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent  {
  constructor(private _routerService: RouterService) {
    this._routerService.setPreviousRoute('about');
  }
}
