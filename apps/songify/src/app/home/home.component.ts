/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Song } from '@songify-workspace/api-interfaces';
import { SongService } from '@songify-workspace/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'songify-workspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  songs$: Observable<Song[]>;

  constructor(
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.songs$ = this.songService.getAll();
  }

}
