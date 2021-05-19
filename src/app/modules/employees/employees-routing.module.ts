import { HomeEmployeeComponent } from './screens/home-employee/home-employee.component';
import { EmployeeComponent } from './screens/employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './screens/list-employees/list-employees.component';

const routes: Routes = [
  {
    path: '',
    component: HomeEmployeeComponent,
    children: [
      {
        path: '',
        component: ListEmployeesComponent,
      },
      {
        path: 'crear',
        component: EmployeeComponent,
      },
      {
        path: 'editar/:id',
        component: EmployeeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
