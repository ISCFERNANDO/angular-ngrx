import { Employees } from './../../modules/employees/models/employee.model';
import { createReducer, on } from '@ngrx/store';
import * as employeesActions from '../actions/employee.action';

export type State = Employees;

const initialState: State = {
  employees: [],
  error: '',
};

export const employeesReducers = createReducer(
  initialState,
  on(employeesActions.setEmployeesSucces, (state, { employees }) => {
    return { ...state, employees, error: '' };
  }),
  on(employeesActions.setEmployeesError, (state, { error }) => {
    return { ...state, employees: [], error };
  })
);
