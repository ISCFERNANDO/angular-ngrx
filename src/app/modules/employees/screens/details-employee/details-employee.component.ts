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
/* import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; */
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

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
    const pdfTable = this.pdfTable.nativeElement;

    console.log(pdfTable.innerHTML);
    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
  }
}
