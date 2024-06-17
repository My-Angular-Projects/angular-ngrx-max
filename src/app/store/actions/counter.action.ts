import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IActionPayload } from '../../types';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    'Init Counter': emptyProps(),
    'Setup Counter': props<IActionPayload>(),
    'Increment Counter': props<IActionPayload>(),
    'Decrement Counter': props<IActionPayload>(),
  },
});
