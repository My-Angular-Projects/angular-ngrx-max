import { createSelector } from '@ngrx/store';
import { IGlobalState } from '../../types';

export const countSelect = (globalState: IGlobalState) =>
  globalState.counter.count;

export const doubleCountSelect = createSelector(
  countSelect,
  (v: number) => v * 2
);
