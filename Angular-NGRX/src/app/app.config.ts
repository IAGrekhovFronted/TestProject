import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { countReducer } from './state/counter/count.reducer';
import { provideEffects } from '@ngrx/effects';
import { CountEffect } from './state/counter/count.effect';
import { usernameReducer } from './state/save-select/save-select.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      count: countReducer,
      user: usernameReducer,
    }),
    provideStoreDevtools({ trace: true }),
    provideEffects([CountEffect]),
  ],
};
