import { Injectable } from '@angular/core';
import { MOCK_ALBUMS } from '../mocks/albums';
import { Album } from '../interfaces/album';
import { Picture } from '../interfaces/picture';
import { MOCK_PICTURES } from '../mocks/pictures';

import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const ALBUM_API_URL = 'http://localhost:3000/api/albums';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albums: Album[] = MOCK_ALBUMS;
  private pictures: Picture[] = MOCK_PICTURES;

  constructor(private http:HttpClient) { }

  findAlbums() {
    return this.http.get(ALBUM_API_URL)
  }
  
  findAlbumbyId(id:string) {
    return this.http.get(ALBUM_API_URL + '/' + id)
  }

  navPaginate(start: number, end: number) {
    return this.http.get<Album[]>(`${ALBUM_API_URL}?limit=${end}&start=${start}`);
  }

  albumCount() {
    return this.http.get<number>(ALBUM_API_URL + '/album_number');
  }


  maxNavIndex() {
    return this.albumCount().pipe(
      map((count: number) => Math.ceil(count / 2))
    );
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
