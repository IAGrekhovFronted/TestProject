import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { countReducer } from './state/count.reducer';
import { provideEffects } from '@ngrx/effects';
import { CountEffect } from './state/count.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      count: countReducer,
    }),
    provideStoreDevtools({ trace: true }),
    provideEffects([CountEffect]),
  ],
};
