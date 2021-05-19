import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/state';
import { MatDialog } from '@angular/material/dialog';
import { DetailsEmployeeComponent } from '../details-employee/details-employee.component';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss'],
})
export class ListEmployeesComponent implements OnInit, OnDestroy {
  employees: Employee[] = [];
  totalItems: number = 0;
  loading: boolean = false;
  suscription!: Subscription;

  constructor(
    private toastService: ToastrService,
    private store: Store<AppState>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.loadEmployees());
  }

  ngOnDestroy(): void {
    if (this.suscription && !this.suscription.closed)
      this.suscription.unsubscribe();
  }

  loadEmployees(): void {
    this.loading = true;
    this.suscription = this.store.select('employees').subscribe((data) => {
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
