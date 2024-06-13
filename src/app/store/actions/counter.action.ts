import { createActionGroup, emptyProps } from '@ngrx/store';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    'Increment Counter': emptyProps(),
    'Decrement Counter': emptyProps(),
  },
});
