import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// ./app/app.module 
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// AppModule start
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
