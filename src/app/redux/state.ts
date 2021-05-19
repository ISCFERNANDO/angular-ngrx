import { ActionReducerMap } from '@ngrx/store';
import * as fromEmployee from './reducers/employee.reducer';

export interface AppState {
  employees: fromEmployee.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  employees: fromEmployee.employeesReducers,
};
