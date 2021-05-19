import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEmployee from '../reducers/employee.reducer';

export const getState = createFeatureSelector<fromEmployee.State>('employees');

export const getEmployees = createSelector(
  getState,
  (state: fromEmployee.State) => state
);
