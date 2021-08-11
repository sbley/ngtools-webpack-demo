import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DomPortalHost, Portal, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

import { RandomImageComponent } from './random-image/random-image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private componentPortalHost: DomPortalHost;
  private templatePortalHost: DomPortalHost;

  @ViewChild('testTemplate') testTemplate: TemplateRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.addComponentToPortal();
    setTimeout(() => this.addEmbeddedTemplateToPortal(), 0);
  }

  private addComponentToPortal() {
    // Create a portalHost from a DOM element
    this.componentPortalHost = this.createPortalHost('.component-portal-host');

    // Locate the component factory for the component to render
    const componentPortal = new ComponentPortal(RandomImageComponent);

    // Attach portal to host
    this.componentPortalHost.attach(componentPortal);
  }

  private addEmbeddedTemplateToPortal() {
    // Create a portalHost from a DOM element
    this.templatePortalHost = this.createPortalHost('.template-portal-host');

    // Create a template portal
    const templatePortal = new TemplatePortal(this.testTemplate, this.viewContainerRef, { $implicit: 'Bob' });

    // Attach portal to host
    this.templatePortalHost.attach(templatePortal);
  }

  private createPortalHost(portalSelector: string) {
    return new DomPortalHost(
      document.querySelector(portalSelector),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
  }
}
