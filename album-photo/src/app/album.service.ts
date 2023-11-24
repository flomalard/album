import { Injectable } from '@angular/core';
import { MOCK_ALBUMS } from './mocks/albums';
import { Album } from './interfaces/album';
import { Picture } from './interfaces/picture';
import { MOCK_PICTURES } from './mocks/pictures';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albums: Album[] = MOCK_ALBUMS;
  private pictures: Picture[] = MOCK_PICTURES;

  constructor() { }

  navPaginate(start: number, end: number): Album[] {
    return this.albums.slice(start, end);
  }

  getAlbumPictures(albumName: string): Picture[] {
    let pictures = this.pictures.filter((a) => a.albumName == albumName)
    if (pictures) {
      console.log(pictures);
      return pictures;
    }
    return [];
  }

  search(keyword: string): Picture[] {
    const key = keyword.toLowerCase();

    if (key === "empty") {
      return [];
    } else if (key === "all") {
      return this.pictures;
    } else if (key === "journey") {
      return this.pictures.filter((p) => p.albumRef.includes("Vacances"));
    } else if (key === "ride") {
      return this.pictures.filter((p) => p.albumRef.includes("Sortie"));
    } else {
      return this.pictures.filter((p) => p.albumName.toLowerCase().includes(key));
    }
  }
}
