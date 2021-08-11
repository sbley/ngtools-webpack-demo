import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-greeting',
  templateUrl: "./greeting.component.html",
  styleUrls: ["./greeting.component.scss"],
})
export class GreetingComponent {
  greeting = "Hello";
  
  @Input() who = '';
}
