import { createAction } from '@ngrx/store';

export const counterIncrementAction = createAction(
  '[COUNTER] Increment Counter'
);

export const counterDecrementAction = createAction(
  '[COUNTER] Decrement Counter'
);
