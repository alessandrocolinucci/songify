/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';

@Component({
  selector: 'songify-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/songs', icon: 'view_list', title: 'Songs' },
  ];

  constructor() {}

}
