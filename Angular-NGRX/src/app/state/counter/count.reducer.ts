import { createReducer, on } from '@ngrx/store';
import { IncrementGroupAction } from './count.actions';

export const InitialCount: Readonly<{ count: number }> = { count: 0 };

export const countReducer = createReducer(
  InitialCount,
  on(IncrementGroupAction.incrementEvent, (state, { count }) => ({
    ...state, // сохраняем остальные поля состояния
    count: state.count + count, // обновляем только count
  }))
);
