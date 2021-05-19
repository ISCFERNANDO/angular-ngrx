import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () =>
      import('./modules/employees/employees.module').then(
        ({ EmployeesModule }) => EmployeesModule
      ),
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'employees',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
