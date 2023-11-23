import { Injectable } from '@angular/core';
import { MOCK_ALBUMS } from './mocks/albums';
import { Albums } from './interfaces/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albums: Albums[] = MOCK_ALBUMS;

  constructor() { }

  navPaginate(start: number, end: number): Albums[] {
    return this.albums.slice(start, end);
  }

}
