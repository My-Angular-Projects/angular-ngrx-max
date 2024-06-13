import { createReducer, on } from '@ngrx/store';
import { counterDecrementAction, counterIncrementAction } from '@store/actions';

export interface ICounterState {
  count: number;
}

export const INITIAL_STATE: ICounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  INITIAL_STATE,
  on(counterIncrementAction, (state: ICounterState) => ({
    ...state,
    count: state.count + 1,
  })),
  on(counterDecrementAction, (state: ICounterState) => ({
    ...state,
    count: state.count - 1,
  }))
);
