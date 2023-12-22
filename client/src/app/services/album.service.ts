import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album';
import { Picture } from '../interfaces/picture';
import { MOCK_PICTURES } from '../mocks/pictures';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

const ALBUM_API_URL = 'http://localhost:3000/api/albums';
const PICTURE_API_URL = 'http://localhost:3000/api/pictures';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private pictures: Picture[] = [];

  // le BehaviorSubject écoute et se met à jour
  searchAlbumPictures = new BehaviorSubject<Picture[]>([]);
  // il est transformé en observable pour pouvoir être récupéré
  searchAlbumPictures$ = this.searchAlbumPictures.asObservable();

  constructor(private http:HttpClient) { }

  findAlbums() {
    return this.http.get<Album[]>(ALBUM_API_URL)
    // pas de <Album[]> ?
    // la nécessité dépend de la structure du code, le mettre rest toutefois une bonne pratique
  }
  
  // pas utile
  /* findAlbumbyId(id:string) {
    return this.http.get(ALBUM_API_URL + '/' + id)
  } */

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
  

  // pas utile
  findPictures(): Observable<Picture[]> {
    return this.http.get<Picture[]>(PICTURE_API_URL);
  }

  // ancienne méthode
  /* getAlbumPictures(albumName: string): Picture[] {
    let pictures = this.pictures.filter((a) => a.albumName == albumName)
    if (pictures) {
      console.log(pictures);
      return pictures;
    }
    return [];
  } */

  getAlbumPicturesByAlbumName(albumName: string): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${PICTURE_API_URL}/albumname/${albumName}`);
  }

  getAlbumPicturesByAlbumRef(albumRef: string): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${PICTURE_API_URL}/albumref/${albumRef}`);
  }

  // ancienne méthode
  /* search(keyword: string): Observable<Picture[]> {
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
  } */

  search(keyword: string): Observable<Picture[]> {
    const key = keyword
    if (key === "empty") {
      return of([]);
    } else if (key === "all") {
      return this.findPictures();
    } else if (key === "journey") {
      return this.getAlbumPicturesByAlbumRef("Vacances");
    } else if (key === "ride") {
      return this.getAlbumPicturesByAlbumRef("Sortie");
    } else {
      return this.getAlbumPicturesByAlbumName(key);
    }
  }
}