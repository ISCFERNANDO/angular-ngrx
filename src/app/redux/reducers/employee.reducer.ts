import { Employees } from './../../modules/employees/models/employee.model';
import { createReducer, on } from '@ngrx/store';
import * as employeesActions from '../actions/employee.action';

export type State = Employees;

const initialState: State = {
  employees: [],
  lastId: 0,
  error: '',
};

export const employeesReducers = createReducer(
  initialState,
  on(employeesActions.setEmployeesSucces, (state, { employees, lastId }) => {
    return { ...state, employees, lastId, error: '' };
  }),
  on(employeesActions.setEmployeesError, (state, { error }) => {
    return { ...state, employees: [], error };
  }),
  on(employeesActions.addEmployee, (state, { employee }) => {
    const employees = [...state.employees, employee];
    return { ...state, employees, lastId: employee.id + 1, error: '' };
  })
);
