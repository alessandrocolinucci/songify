import { Injectable } from '@nestjs/common';
import { Song } from '@songify-workspace/api-interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SongsService {

  songs: Song[] = [
    {
      id: '1',
      title: "Snow (Hey Oh)",
      author: "Red Hot Chili Peppers",
      url: "https://open.spotify.com/track/2aibwv5hGXSgw7Yru8IYTO?si=41555971285b4fce"
    },
    {
      id:'2',
      title: "Fortunate Son",
      author: "Creedence Clearwater Revival",
      url: "https://open.spotify.com/track/4BP3uh0hFLFRb5cjsgLqDh?si=32af7360a27b486e"
    },
    {
      id: '3',
      title: "Diamonds on the Inside",
      author: "Ben Harper",
      url: "https://open.spotify.com/track/6FvtSHS3hzjS8itHJPRzoJ?si=45f10ab7e55c461a"
    }
  ]

  create(song: Song) {
    this.songs = [...this.songs, Object.assign({}, song, { id: uuidv4() })];
  }

  findAll() {
    return this.songs;
  }

  findOne(id: string) {
    return this.songs.find(song => song.id === id);
  }

  update(id: string, song: Song) {
    this.songs = this.songs.map(s => s.id === id ? song : s);
    return this.songs;
  }

  remove(id: string) {
    this.songs = this.songs.filter(s => s.id !== id);
    return this.songs;
  }
}
