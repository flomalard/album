import { Injectable } from '@angular/core';
import { MOCK_ALBUMS } from './mocks/albums';
import { Album } from './interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albums: Album[] = MOCK_ALBUMS;

  constructor() { }

  navPaginate(start: number, end: number): Album[] {
    return this.albums.slice(start, end);
  }
/*
  getAlbumPictures(albumName: string): string {
    albumName
  }*/
}
