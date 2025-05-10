import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UsernameState } from './save-select.action';

const selectUserState = createFeatureSelector<Readonly<UsernameState>>('user');

export const selectUsername = createSelector(
  selectUserState,
  (state: Readonly<UsernameState>) => state.username
);
