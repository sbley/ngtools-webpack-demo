import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit } from '@angular/core';
import { DomPortalHost, Portal, ComponentPortal } from '@angular/cdk/portal';

import { RandomImageComponent } from './random-image/random-image.component';

@Component({
  selector: 'app-root',
  template: "<div><app-greeting who='AppComponent'></app-greeting></div>",
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private portalHost: DomPortalHost;
  private portal: ComponentPortal<RandomImageComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  ngOnInit() {
    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalHost(
      document.querySelector('.portal-host'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    // Locate the component factory for the component to render
    this.portal = new ComponentPortal(RandomImageComponent);

    // Attach portal to host
    this.portalHost.attach(this.portal);
  }
}
