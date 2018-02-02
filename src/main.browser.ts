/**
 * Angular bootstrapping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'environments/environment';
// Sudhir i18n
import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { TRANSLATION_EN as TRANSLATION } from './resources/i18n/messages.en';

// Sudhir

/**
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';

/**
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule,
      {providers: [
        {provide: TRANSLATIONS, useValue: TRANSLATION},
        {provide: TRANSLATIONS_FORMAT, useValue:  'xlf'},
        {provide: LOCALE_ID, useValue: 'en'}
      ]})
    .then(environment.decorateModuleRef)
    .catch((err) => console.error(err));
}

/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler() {
 document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
 main();
}
