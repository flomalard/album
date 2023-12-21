import { Component, OnInit } from '@angular/core';
import { Album } from '../../../interfaces/album';
import { MOCK_ALBUMS } from '../../../mocks/albums';
import { AlbumService } from '../../../services/album.service';
import { Picture } from '../../../interfaces/picture';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  selectedAlbum: Album | undefined;
  albumPictures: Picture[] = [];

  currentNavIndex: number = 1;
  albumsPerNav: number = 2;
  maxNavIndex: number = Math.ceil((this.albums.length)/this.albumsPerNav);

  isSelected: boolean = false;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadNav(this.currentNavIndex);
    /* this.albumService.findAlbums().subscribe((MesAlbums: any) => {
      this.albums = MesAlbums;
    }) */
  }

  loadNav(page: number) {
    const start = (page -1) * this.albumsPerNav;
    this.albumService.navPaginate(start,2).subscribe((TwoAlbumsPerPage) => {
      this.albums = TwoAlbumsPerPage;
    })
    this.currentNavIndex = page;
  }
  
  onSelect(album: Album) {
    this.selectedAlbum = album;
    this.albumPictures = this.albumService.getAlbumPictures(album.name);
    this.isSelected = true;
  }

  updatePicturesOnSearch(pictures: Picture[]) {
    this.albumPictures = pictures;
  }
}
