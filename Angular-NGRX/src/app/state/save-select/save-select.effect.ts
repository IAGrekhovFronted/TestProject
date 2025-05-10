import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { UsernameChangeAction } from './save-select.action';

@Injectable()
export class UsernameEffect {
  constructor(private readonly actions$: Actions) {}

  logUsernameChange$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UsernameChangeAction),
        tap(({ username }) => {
          console.log('Username changed to:', username);
        })
      ),
    { dispatch: false }
  );
}
