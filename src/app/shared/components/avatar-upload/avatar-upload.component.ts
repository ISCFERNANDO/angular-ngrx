import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.scss'],
})
export class AvatarUploadComponent implements OnInit, OnChanges {
  @Input() imageUrl?: string;
  @Input() isEditable: boolean = true;
  @Output() fileEvent: EventEmitter<File> = new EventEmitter();
  @Input() file: File | any;
  imgURL: any;
  constructor() {}

  ngOnInit(): void {
    if (this.file) {
      this.preview();
    }
  }

  ngOnChanges(): void {
    if (this.imageUrl) {
      this.file = null;
      this.imgURL = '';
    }
  }

  onSelect(event: any) {
    this.file = event.addedFiles[0];
    this.fileEvent.emit(this.file);
    this.preview();
  }

  preview() {
    if (!this.file) return;
    var mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) return;

    var reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => (this.imgURL = reader.result);
    this.file = null;
  }
}
