
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../action/counter.action';
import { initialState } from '../state/counter.state';

export const counterReducer = createReducer(
  initialState, // The initial state for this reducer

  on(increment, (state) => ({ ...state, count: state.count + 1 })),

  on(decrement, (state) => ({ ...state, count: state.count - 1 })),

  on(reset, (state) => ({ ...state, count: 0, reason: 'Reset action triggered' }))
);