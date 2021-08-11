import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { RandomImageComponent } from './random-image/random-image.component';

@NgModule({
  declarations: [AppComponent, GreetingComponent, RandomImageComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
