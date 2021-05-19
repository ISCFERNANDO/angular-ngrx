import { EmployeesService } from './../../modules/employees/services/employees.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as employeeActions from '../actions/employee.action';
import { Employee } from 'src/app/modules/employees/models/employee.model';

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService
  ) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.loadEmployees),
      mergeMap(() =>
        this.employeesService.loadEmployees().pipe(
          map(({ data }) => {
            let lastId = 1;
            let employees: Employee[] = [];
            if (data && data.length) {
              employees = data.map((item: any) => {
                lastId = lastId < item.id ? item.id : lastId;
                return {
                  id: item.id,
                  name: item.employee_name,
                  age: item.employee_age,
                  salary: item.employee_salary,
                  imageUrl: item.profile_image,
                };
              });
            }
            return employeeActions.setEmployeesSucces({
              employees,
              lastId,
            });
          }),
          catchError(({ message }) =>
            of(
              employeeActions.setEmployeesError({
                error: message,
              })
            )
          )
        )
      )
    )
  );
}
