import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, setAngularLib } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Import these globally to bring in their @types
import * as angular from 'angular';
import './app-ajs';


setAngularLib(angular);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['phonecatApp']);
});
