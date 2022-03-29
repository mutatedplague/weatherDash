import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  @Input() message = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
