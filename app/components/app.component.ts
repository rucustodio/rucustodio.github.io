import { Component } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent  {

  public refresh() {
    window.location.reload();
  }
}
