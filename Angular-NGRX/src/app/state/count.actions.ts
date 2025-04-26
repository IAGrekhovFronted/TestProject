import { createAction, createActionGroup, props } from '@ngrx/store';

export const IncrementGroupAction = createActionGroup({
  source: 'Count',
  events: {
    'Increment Event': props<{ count: number }>(),
  },
});

export const DecrementAction = createAction(
  'Decrement Event',
  props<{ count: number }>()
);
