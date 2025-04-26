import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IncrementGroupAction } from './count.actions';
import { tap } from 'rxjs';

@Injectable()
export class CountEffect {
  countIncrement$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(IncrementGroupAction.incrementEvent),
        tap(() => console.log('Doing something...'))
      ),
    { dispatch: false }
  );

  constructor(private readonly actions$: Actions) {}
}
