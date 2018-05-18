import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// The last line in this file is what boots our AppModule and subsequently boots our Angular app.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
