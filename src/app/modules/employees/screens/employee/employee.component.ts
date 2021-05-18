import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  formEmployee!: FormGroup;
  imageUrl: string = '';
  file!: File;

  constructor(private fBuilder: FormBuilder, private location: Location) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.formEmployee = this.fBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  fileHandler = (file: File) => (this.file = file);

  saveEmployee(): void {
    if (this.formEmployee.invalid) {
      this.formEmployee.markAllAsTouched();
      return;
    }
    console.log('guardando...');
  }

  back(): void {
    this.location.back();
  }
}
