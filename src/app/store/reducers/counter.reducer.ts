import { createReducer, on } from '@ngrx/store';
import { CounterActions } from '@store/actions';
import { ICounterState } from '../../types';

export const INITIAL_STATE: ICounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  INITIAL_STATE,
  on(CounterActions.incrementCounter, (state: ICounterState, { value }) => ({
    ...state,
    count: state.count + value,
  })),
  on(CounterActions.decrementCounter, (state: ICounterState, { value }) => ({
    ...state,
    count: state.count - value,
  }))
);
