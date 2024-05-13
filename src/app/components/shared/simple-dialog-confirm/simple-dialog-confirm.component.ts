import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-simple-dialog-confirm',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    NgIf,
  ],
  templateUrl: './simple-dialog-confirm.component.html',
})
export class SimpleDialogConfirmComponent {
  dialogData: { title?: string; message?: string } = inject(MAT_DIALOG_DATA);
}
