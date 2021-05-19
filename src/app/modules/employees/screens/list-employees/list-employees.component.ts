import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/state';
import { MatDialog } from '@angular/material/dialog';
import { DetailsEmployeeComponent } from '../details-employee/details-employee.component';

import { ClrDatagridFilterInterface } from '@clr/angular';
import { Subject } from 'rxjs';

export class GridFilters implements ClrDatagridFilterInterface<Employee> {
  changes = new Subject<any>();
  isActive(): boolean {
    console.log('is active');
    return true;
  }

  accepts(employee: Employee) {
    console.log(employee);
    return true;
  }
}

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  totalItems: number = 0;
  loading: boolean = false;
  filter: GridFilters = new GridFilters();

  constructor(
    private toastService: ToastrService,
    private store: Store<AppState>,
    private dialog: MatDialog
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
      this.totalItems = this.employees.length;
      this.loading = false;
    });
  }

  openDetail(employee: Employee): void {
    this.dialog.open(DetailsEmployeeComponent, {
      width: '650px',
      data: employee,
      panelClass: 'custom-dialog',
      disableClose: true,
    });
  }
}
