import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'counter2',
  template: `
    <button (click)="dec2()">-</button>
    <strong>{{counterValue2}}</strong>
    <button (click)="inc2()">+</button>
  `,
  styles: [
    'strong { padding: 0 5px }'
  ]
})
export class Counter2Component implements OnInit {

  counterValue2: number;

  constructor() {
    this.counterValue2 = 0;

  }

  ngOnInit() {
  }
  dec2() {
    this.counterValue2 = this.counterValue2 - 1;

  }

  inc2() {
    this.counterValue2 = this.counterValue2 + 1;

  }

}
