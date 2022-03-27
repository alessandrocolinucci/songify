/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Song } from '@songify-workspace/api-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'songify-workspace-songs-details',
  templateUrl: './songs-details.component.html',
  styleUrls: ['./songs-details.component.scss'],
})
export class SongsDetailsComponent implements OnInit {

  currentSong: Song;
  songTitle = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set song(value: Song) {
    if (value) this.songTitle = value.title;
    this.currentSong = { ...value };
  }

  constructor() {}

  ngOnInit(): void {}

}
