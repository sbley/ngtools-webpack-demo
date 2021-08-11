import "@angular/platform-browser";
import "@angular/platform-browser-dynamic";
import "@angular/core";
import "@angular/common";
import "zone.js";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const a = 'Hello World';

  function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello Webpack. ' + a;

    return element;
  }
  
  function angularRoot() {
	  return document.createElement('app-root');
  }

  //document.body.appendChild(component());
  document.body.appendChild(angularRoot());
  
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
