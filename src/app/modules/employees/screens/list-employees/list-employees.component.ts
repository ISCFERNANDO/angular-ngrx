import { EmployeesService } from './../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { finalize, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  totalItems: number = 0;
  loading: boolean = false;

  constructor(
    private employeService: EmployeesService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.loading = true;
    this.employeService
      .loadEmployees()
      .pipe(
        map((resp) => resp?.data),
        finalize(() => (this.loading = false))
      )
      .subscribe(
        (data: Array<any>) => {
          if (!data) return;
          this.employees = data.map((item) => ({
            id: item.id,
            name: item.employee_name,
            age: item.employee_age,
            salary: item.employee_salary,
            imageUrl: item.profile_image,
          }));
          this.totalItems = this.employees.length;
        },
        (error: any) => this.toastService.error(error.message, 'Error')
      );
  }
}
