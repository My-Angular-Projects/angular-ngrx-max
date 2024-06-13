import { Component, inject } from '@angular/core';

import { CounterService } from '@services/counter.service';

@Component({
  selector: 'ngrx-counter-output',
  standalone: true,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss',
})
export class CounterOutputComponent {
  public readonly counter = inject(CounterService).counter;
}
