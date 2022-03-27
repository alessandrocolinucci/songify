import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Song } from '@songify-workspace/api-interfaces';
import { Observable } from 'rxjs';

export const ENDPOINT = 'http://localhost:3000/songs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Song[]> {
    return this.http.get<Song[]>(ENDPOINT);
  }

  findByID(id: number): Observable<Song> {
    return this.http.get<Song>(`${ENDPOINT}/${id}`);
  }

  create(song: Song): Observable<Song> {
    return this.http.post<Song>(ENDPOINT, song);
  }

  update(song: Song): Observable<Song> {
    return this.http.put<Song>(`${ENDPOINT}/${song.id}`, song);
  }

  delete(song: Song): Observable<boolean> {
    return this.http.delete<boolean>(`${ENDPOINT}/${song.id}`);
  }

}
