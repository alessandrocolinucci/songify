/* eslint-disable @typescript-eslint/no-empty-function */
import { Song } from '@songify-workspace/api-interfaces';
import { Component, OnInit } from '@angular/core';
import { SongService } from '@songify-workspace/core-data';
import { Observable } from 'rxjs';

const EMPTY_SONG = {
  id: null,
  title: '',
  author: '',
  url: ''
};
@Component({
  selector: 'songify-workspace-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {

  songs$: Observable<Song[]>;
  selectetSong: Song;

  constructor(
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.getSongs();
    this.selectetSong = EMPTY_SONG;
  }

  getSongs(): void {
    this.songs$ = this.songService.getAll();
  }

  selectSong(song: Song): void {
    this.selectetSong = song;
  }

  deleteSong(song: Song): void {
    this.songService.delete(song).subscribe(() => this.getSongs());
  }

  saveSong(song: Song): void {
    song.id ? this.updateSong(song) : this.createSong(song);
    this.resetSongDetails();
  }

  createSong(song: Song): void {
    this.songService.create(song).subscribe(() => this.getSongs());
  }

  updateSong(song: Song): void {
    this.songService.update(song).subscribe(() => this.getSongs());
  }

  resetSongDetails(): void {
    this.selectetSong = EMPTY_SONG;
  }

}
