import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/state';

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
    private toastService: ToastrService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.loadEmployees());
  }

  loadEmployees(): void {
    this.loading = true;
    this.store.select('employees').subscribe((data) => {
      if (data.error) {
        this.toastService.error(data.error, 'Error');
        return;
      }
      this.employees = data.employees;
      this.loading = false;
    });
  }
}
