import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material'
import { ExecutableProgramModel } from '../Models/ExecutableProgramModel';

@Component({
  selector: 'app-preview-dialog',
  templateUrl: './preview-dialog.component.html',
  styleUrls: ['./preview-dialog.component.css']
})
export class PreviewDialogComponent {

  constructor(public thisDialogRef: MatDialogRef<PreviewDialogComponent>, @Inject(MAT_DIALOG_DATA) public ExecutableProgram: ExecutableProgramModel) { }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
