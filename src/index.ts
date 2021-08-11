import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const a = 'Hello World';

function heading(text: string) {
  const h1 = document.createElement('h1');
  const textNode = document.createTextNode(text);
  h1.appendChild(textNode);
  return h1;
}

function portalHost() {
  const element = document.createElement('div');
  element.className = 'portal-host';

  return element;
}

function angularRoot() {
  return document.createElement('app-root');
}

document.body.appendChild(heading('Angular root component'));
document.body.appendChild(angularRoot());

document.body.appendChild(heading('Portal'));
document.body.appendChild(portalHost());

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
