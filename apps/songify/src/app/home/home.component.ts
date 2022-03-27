/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */


import { Song } from '@songify-workspace/api-interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'songify-workspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  songs: Song[] = [
    {
      id: '1',
      title: 'Far Beyond The Sun',
      description: 'A neo classical song by Yngwie Malmsteen',
    },
    {
      id: '2',
      title: 'Sega Sunset',
      description: 'A witch house banger by non other than Lorn ',
    },
    {
      id: '3',
      title: 'Norton Commander',
      description: 'A chill alternative song by Men I Trust',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
