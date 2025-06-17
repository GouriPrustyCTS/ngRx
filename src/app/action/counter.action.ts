import { createAction, props } from '@ngrx/store';

// Define actions without payloads
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset',props<{ reason: string }>());