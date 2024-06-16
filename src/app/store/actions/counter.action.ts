import { createActionGroup, props } from '@ngrx/store';
import { IActionPayload } from '../../types';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    'Increment Counter': props<IActionPayload>(),
    'Decrement Counter': props<IActionPayload>(),
  },
});
