import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: "<div><app-greeting who='AppComponent'></app-greeting></div>",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Hello from AppComponent";

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
