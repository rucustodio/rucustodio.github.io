import { Component } from '@angular/core';
import { RouterService } from './router.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
})
export class NavComponent  {
  constructor(private _routerService: RouterService) {
  }

  previousLink() {
    return this._routerService.previousRoute;
  }
}
