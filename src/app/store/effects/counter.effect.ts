import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { CounterActions } from '@store/actions';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { countSelect } from '@store/selectors';
import { ECounterStorage } from '../../enums';

export const saveCounter = createEffect(
  () =>
    inject(Actions).pipe(
      ofType(CounterActions.incrementCounter, CounterActions.decrementCounter),
      withLatestFrom(inject(Store).select(countSelect)),
      tap(([payload, count]) => {
        localStorage.setItem(ECounterStorage.CounterKey, count.toString());
      })
    ),
  { dispatch: false, functional: true } // <- effect config
);

export const loadCounter = createEffect(
  () =>
    inject(Actions).pipe(
      ofType(CounterActions.initCounter),
      switchMap(() => {
        const savedCounter = Number(
          localStorage.getItem(ECounterStorage.CounterKey)
        );

        return of(CounterActions.setupCounter({ value: savedCounter }));
      })
    ),
  { functional: true }
);
