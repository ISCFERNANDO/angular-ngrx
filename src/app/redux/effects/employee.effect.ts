import { EmployeesService } from './../../modules/employees/services/employees.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as employeeActions from '../actions/employee.action';

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
            if (data && data.length) {
              return employeeActions.setEmployeesSucces({
                employees: data.map((item: any) => ({
                  id: item.id,
                  name: item.employee_name,
                  age: item.employee_age,
                  salary: item.employee_salary,
                  imageUrl: item.profile_image,
                })),
              });
            }
            return employeeActions.setEmployeesSucces({
              employees: [],
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
