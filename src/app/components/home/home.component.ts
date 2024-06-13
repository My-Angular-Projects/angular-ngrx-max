import { Component } from '@angular/core';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterControlsComponent } from '../counter-controls/counter-controls.component';

@Component({
  selector: 'ngrx-home',
  standalone: true,
  imports: [CounterOutputComponent, CounterControlsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
