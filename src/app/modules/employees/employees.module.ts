import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListEmployeesComponent } from './screens/list-employees/list-employees.component';
import { EmployeeComponent } from './screens/employee/employee.component';
import { HomeEmployeeComponent } from './screens/home-employee/home-employee.component';

@NgModule({
  declarations: [
    ListEmployeesComponent,
    EmployeeComponent,
    HomeEmployeeComponent,
  ],
  imports: [CommonModule, EmployeesRoutingModule, SharedModule],
})
export class EmployeesModule {}
