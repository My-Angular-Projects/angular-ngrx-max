import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  public counter = signal<number>(0);

  public increment(): void {
    this.counter.update((prevValue: number) => prevValue + 1);
  }

  public decrement(): void {
    this.counter.update((prevValue: number) => prevValue - 1);
  }
}
