import { EmployeeComponent } from './screens/employee/employee.component';
import { ListEmployeesComponent } from './screens/list-employees/list-employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListEmployeesComponent,
  },
  {
    path: '/:id',
    component: EmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
