import { Component } from '@angular/core';
import { RouterService} from './router.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent  {
  constructor(private _routerService: RouterService) {
    this._routerService.setPreviousRoute('/');
  }  
}
