/* eslint-disable @typescript-eslint/no-empty-function */
import { Song } from '@songify-workspace/api-interfaces';
import { Component, OnInit } from '@angular/core';
import { SongService } from '@songify-workspace/core-data';

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

  songs: Song[];
  selectetSong: Song;

  constructor(
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.songService.getAll().subscribe(songs => this.songs = songs);
    this.selectetSong = EMPTY_SONG;
  }

  selectSong(song: Song): void {
    this.selectetSong = song;
  }

  deleteSong(song: Song): void {
    this.songs = this.songs.filter((w) => song.id !== w.id);
    this.selectetSong = EMPTY_SONG;
  }

  saveSong(song: Song): void {
    song.id ? this.updateSong(song) : this.createSong(song);
  }

  updateSong(song: Song): void {
    this.songs = this.songs.map((w) => song.id === w.id ? song : w);
    this.resetSongDetails();
  }

  createSong(song: Song): void {
    const newSong: Song = {
      id: this.getRandomID(),
      title: song.title,
      author: song.author,
      url: song.url
    };
    this.songs = [...this.songs, newSong];
    this.resetSongDetails();
  }

  resetSongDetails(): void {
    this.selectetSong = EMPTY_SONG;
  }

  private getRandomID(): number {
    return Math.floor(Math.random() * 999999999999);
  }

}
