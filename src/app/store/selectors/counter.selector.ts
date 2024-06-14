import { createSelector } from '@ngrx/store';
import { IGlobalState } from '../../types';

export const count = (globalState: IGlobalState) => globalState.counter.count;
export const doubleCount = createSelector(count, (v) => v * 2);
