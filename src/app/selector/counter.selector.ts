// src/app/state/counter.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from '../state/counter.state';

export const selectCounterState = createFeatureSelector<CounterState>('counter');
export const selectReasonState = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterState, 
  (state: CounterState) => state.count 
);

export const selectReason = createSelector(
    selectReasonState, 
    (state: CounterState) => state.reason
  );