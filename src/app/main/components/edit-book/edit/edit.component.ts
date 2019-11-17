import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import * as moment from 'moment';



export interface DialogData {
  Description: string;
  Excerpt: string;
  ID: number;
  PageCount: number;
  PublishDate: number;
  Title: string;
  isToggle: boolean;
  oldFormat: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuild: FormBuilder,
  ) { }

  ngOnInit() {
    if (this.data) {
      this.buildForm();
    }
  }

  buildForm() {
    this.editForm = this.formBuild.group({
      Title: [this.data.Title, [Validators.required]],
      PageCount: [this.data.PageCount, [Validators.required]],
      PublishDate: [moment(this.data.PublishDate).format('YYYY-MM-DD'), [Validators.required, this.checkValidDate]],
      Description: [this.data.Description, [Validators.required]],
      Excerpt: [this.data.Excerpt, []],
      ID: [this.data.ID, [Validators.required]],
    })
  }

  checkValidDate(form: AbstractControl) {
    //  validation format date
    return null;
  }

  exit(): void {
    this.dialogRef.close();
  }
}
