import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  employees: Employee[] = [];

  constructor(private http: HttpClient) {
    this.loadEmployees();
  }

  loadEmployees(): Observable<any> {
    return this.http
      .get('https://dummy.restapiexample.com/api/v1/employees')
      .pipe(catchError((err) => throwError(err.error)));
  }
}
