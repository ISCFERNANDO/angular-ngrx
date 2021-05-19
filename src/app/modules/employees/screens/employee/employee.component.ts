import { Store } from '@ngrx/store';
import { AppState } from './../../../../redux/state';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as employeeActions from '../../../../redux/actions/employee.action';
import { Employee } from '../../models/employee.model';
import { forbiddenNumberValidator } from 'src/app/utils/validators/phone-number.validator';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  formEmployee!: FormGroup;
  imageUrl: string = '';
  file!: File;

  constructor(
    private fBuilder: FormBuilder,
    private location: Location,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.calculateNextId();
  }

  private buildForm(): void {
    this.formEmployee = this.fBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      salary: ['', [Validators.required, forbiddenNumberValidator()]],
      age: ['', [Validators.required, forbiddenNumberValidator()]],
    });
  }

  private calculateNextId(): void {
    this.store
      .select('employees')
      .subscribe((data) =>
        this.formEmployee.patchValue({ id: data.lastId + 1 })
      );
  }

  fileHandler = (file: File) => (this.file = file);

  validateAndSaveEmployee(): void {
    if (this.formEmployee.invalid) {
      this.formEmployee.markAllAsTouched();
      return;
    }
    this.saveEmployee();
  }

  saveEmployee(): void {
    const employee: Employee = this.formEmployee.getRawValue();
    employee.file = this.file;
    this.store.dispatch(employeeActions.addEmployee({ employee }));
    this.back();
  }

  back(): void {
    this.location.back();
  }
}
