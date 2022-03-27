/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'songify-workspace-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() sidenav = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

}
