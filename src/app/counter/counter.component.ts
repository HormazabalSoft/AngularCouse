import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter: {{ counter }}</h3>

    <button (click)="increaseBy()"> incrementar</button>
    <button (click)="decreasedBy()"> decrementar</button>
    <button (click)="resetCounter()">Reset</button>

  `

})
export class CounterComponent {

  public counter: number = 10;

  increaseBy(): void {
    this.counter += 1;
  }

  decreasedBy(): void {
    this.counter -= 1;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}
