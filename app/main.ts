import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import { AppModule } from './components/app.module';

import './styles/main.scss';

if (window.location.href = 'http://rubencustodio.com/') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
