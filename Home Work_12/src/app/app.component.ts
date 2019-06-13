import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <input value={{value}} (input)="handleInputChange($event)" />
      <counter [counterValue]="value" (onChange)="handleChange($event)"></counter>
    </div>
  `
})
export class AppComponent {
  title = 'homework12';
  value = 0;

  handleInputChange(e) {
    this.value = e.data;
  }

  handleChange(value) {
    this.value = value;
  }
}
