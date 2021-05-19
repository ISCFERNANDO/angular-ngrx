import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from './../../models/employee.model';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.scss'],
})
export class DetailsEmployeeComponent implements OnInit {
  imageUrl: string = '';
  formEmployee!: FormGroup;
  @ViewChild('pdfTable', { static: false }) pdfTable!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public employee: Employee,
    private fBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.setFormData();
  }

  private buildForm(): void {
    this.formEmployee = this.fBuilder.group({
      name: [''],
      salary: [''],
      age: [''],
    });
  }

  private setFormData(): void {
    this.formEmployee.patchValue({ ...this.employee });
  }

  downloadAsPDF(): void {
    let data = this.pdfTable.nativeElement;
    html2canvas(data).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('angular-demo.pdf');
    });
  }
}
