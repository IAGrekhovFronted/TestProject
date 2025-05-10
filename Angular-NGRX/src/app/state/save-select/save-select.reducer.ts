import { createReducer, on } from '@ngrx/store';
import { UsernameChangeAction } from './save-select.action';
import { UsernameState } from './save-select.action';

export const InitialUsername: Readonly<UsernameState> = {
  username: '',
};

export const usernameReducer = createReducer(
  InitialUsername,
  on(UsernameChangeAction, (state, { username }) => ({
    ...state,
    username: username,
  }))
);
