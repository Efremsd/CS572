import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>************smart and dump Components*************</p>
    <app-smart></app-smart>
    <hr />
    <p>***************Custom directives*********************</p>
    <p [appIsVisible]="'false'">Custom directive is [isVisible]</p>
    <hr />
    <p>*************Custom directive listenning events**********</p>
    <div appLoggable>
      <p>This is custom directive with host listening to dbclk event</p>
      <p> Multi:{{ "Asaad" | multi:3}} </p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home work 12';
}
