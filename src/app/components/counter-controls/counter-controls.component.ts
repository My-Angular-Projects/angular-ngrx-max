import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'ngrx-counter-controls',
  standalone: true,
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.scss',
})
export class CounterControlsComponent {
  private readonly counterService = inject(CounterService);

  public increment(): void {
    this.counterService.increment();
  }

  public decrement(): void {
    this.counterService.decrement();
  }
}
