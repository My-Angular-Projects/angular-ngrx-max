import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterActions } from '@store/actions';

@Component({
  selector: 'ngrx-counter-controls',
  standalone: true,
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.scss',
})
export class CounterControlsComponent {
  private readonly store = inject(Store);

  public increment(): void {
    this.store.dispatch(CounterActions.incrementCounter());
  }

  public decrement(): void {
    this.store.dispatch(CounterActions.decrementCounter());
  }
}
