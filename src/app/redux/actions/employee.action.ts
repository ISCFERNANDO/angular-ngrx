import { Employee } from './../../modules/employees/models/employee.model';
import { createAction, props } from '@ngrx/store';

export const loadEmployees = createAction(
  '[EMPLOYEE] > Cargar empleados iniciales'
);

export const setEmployeesSucces = createAction(
  '[EMPLOYEE] > Set información inicial de empleados: success',
  props<{ employees: Employee[]; lastId: number }>()
);

export const setEmployeesError = createAction(
  '[EMPLOYEE] > Set información inicial de empleados: error',
  props<{ error: string }>()
);

export const addEmployee = createAction(
  '[EMPLOYEE] > Agregar nuevo empleado',
  props<{ employee: Employee }>()
);

export const updateEmployee = createAction(
  '[EMPLOYEE] > Actualizar empleado',
  props<{ employee: Employee }>()
);
