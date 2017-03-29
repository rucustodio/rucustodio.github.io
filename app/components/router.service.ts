import {Injectable} from '@angular/core';

@Injectable()
export class RouterService {
  public previousRoute: string;

  public setPreviousRoute(route: string) {
    this.previousRoute = route;
  }
}