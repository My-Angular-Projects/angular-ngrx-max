import { APP_INITIALIZER, ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore, Store } from '@ngrx/store';
import { counterReducer } from '@store/reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import * as counterEffects from '@store/effects/counter.effect';
import { CounterActions } from '@store/actions';

export function initializeCounter(store: Store) {
  return (): void => store.dispatch(CounterActions.initCounter());
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(counterEffects),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeCounter,
      multi: true,
      deps: [Store],
    },
  ],
};
