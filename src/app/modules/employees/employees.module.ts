import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmployeesComponent } from './screens/list-employees/list-employees.component';
import { EmployeeComponent } from './screens/employee/employee.component';


@NgModule({
  declarations: [
    ListEmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
