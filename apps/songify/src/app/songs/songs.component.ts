/* eslint-disable @typescript-eslint/no-empty-function */
import { Song } from '@songify-workspace/api-interfaces';
import { Component, OnInit } from '@angular/core';

const mockSongs: Song[] = [
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

const emptySong: Song = {
  id: null,
  title: '',
  description: '',
};

@Component({
  selector: 'songify-workspace-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {

  songs: Song[];
  selectetSong: Song;

  constructor() {}

  ngOnInit(): void {
    this.songs = mockSongs;
    this.selectetSong = emptySong;
  }

  selectSong(song: Song) {
    this.selectetSong = song;
  }

  deleteSong(song: Song) {
    this.songs = this.songs.filter((w) => song.id !== w.id);
    this.selectetSong = emptySong;
  }

  saveSong(song: Song) {
    song.id ? this.updateSong(song) : this.createSong(song);
  }

  updateSong(song: Song) {
    this.songs = this.songs.map((w) => song.id === w.id ? song : w);
    this.resetSongDetails();
  }

  createSong(song: Song) {
    const newSong = {
      id: this.getRandomID(),
      title: song.title,
      description: song.description,
    };
    this.songs = [...this.songs, newSong];
    this.resetSongDetails();
  }

  resetSongDetails() {
    this.selectetSong = emptySong;
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }

}
