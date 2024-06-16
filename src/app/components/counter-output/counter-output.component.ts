import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { countSelect, doubleCountSelect } from '@store/selectors';
import { startWith } from 'rxjs';

@Component({
  selector: 'ngrx-counter-output',
  standalone: true,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss',
  imports: [AsyncPipe],
})
export class CounterOutputComponent {
  public readonly count$ = inject(Store).select(countSelect);
  public readonly doubleCounter$ = inject(Store)
    .select(doubleCountSelect)
    .pipe(startWith(0));
}
