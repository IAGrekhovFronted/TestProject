import { createAction, props } from '@ngrx/store';

export const UsernameChangeAction = createAction(
  'Username Change',
  props<UsernameState>()
);

export type UsernameState = {
  username: string;
};
