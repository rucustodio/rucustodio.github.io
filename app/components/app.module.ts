import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { LogoComponent }  from './logo.component';
import { NavComponent }  from './nav.component';
import { SocialComponent }  from './social.component';
import { HomeComponent }  from './home.component';
import { AboutComponent }  from './about.component';
import { RouterService }  from './router.service';
import { RoutingModule }  from './routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    RoutingModule
  ],
  declarations: [ 
    AppComponent,
    LogoComponent,
    NavComponent,
    SocialComponent,
    HomeComponent,
    AboutComponent
  ],
  providers: [
    RouterService
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
