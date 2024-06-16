import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterActions } from '@store/actions';
import { IActionPayload } from '../../types';

@Component({
  selector: 'ngrx-counter-controls',
  standalone: true,
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.scss',
})
export class CounterControlsComponent {
  private readonly store = inject(Store);
  private readonly actionPayload: IActionPayload = { value: 2 };

  public increment(): void {
    this.store.dispatch(
      CounterActions.incrementCounter({ ...this.actionPayload })
    );
  }

  public decrement(): void {
    this.store.dispatch(
      CounterActions.decrementCounter({ ...this.actionPayload })
    );
  }
}
