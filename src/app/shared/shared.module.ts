import { AvatarUploadComponent } from './components/avatar-upload/avatar-upload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule } from 'ngx-toastr';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

import { ClarityModule } from '@clr/angular';
import { MatDialogModule } from '@angular/material/dialog';

const angularMaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatDialogModule,
];

const clarityModules = [ClarityModule];

const angularModules = [FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [AvatarUploadComponent],
  imports: [
    CommonModule,
    ...angularModules,
    ...angularMaterialModules,
    ...clarityModules,
    NgxDropzoneModule,
    ToastrModule.forRoot({
      timeOut: 20000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
    }),
  ],
  exports: [
    ...angularModules,
    ...angularMaterialModules,
    ...clarityModules,
    AvatarUploadComponent,
  ],
})
export class SharedModule {}
