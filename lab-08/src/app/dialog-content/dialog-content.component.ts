import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  template: `
    <h1 mat-dialog-title>Dialog Title</h1>
    <div mat-dialog-content>
      <p>Dialog content goes here.</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
})
export class DialogContentComponent {}

