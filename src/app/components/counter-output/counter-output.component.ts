import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { IGlobalState } from '@store/reducers';

@Component({
  selector: 'ngrx-counter-output',
  standalone: true,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss',
  imports: [AsyncPipe],
})
export class CounterOutputComponent {
  public readonly count$ = inject(Store).select(
    (state: IGlobalState) => state.counter.count
  );
}
