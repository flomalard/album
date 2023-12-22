import { Component, OnInit } from '@angular/core';
import { Album } from '../../../interfaces/album';
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
  maxNavIndex: number = 1;

  isSelected: boolean = false;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadNav(this.currentNavIndex);

    this.albumService.searchAlbumPictures$.subscribe((pictures: Picture[]) => {
      this.updatePicturesOnSearch(pictures);
    });
    
    this.albumService.maxNavIndex().subscribe((maxIndex: number) => {
      this.maxNavIndex = maxIndex;
    });
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
    this.albumService.getAlbumPicturesByAlbumName(album.name).subscribe((pictures) => {
      this.albumPictures = pictures;
    });
    this.isSelected = true;
  }

  updatePicturesOnSearch(pictures: Picture[]) {
    this.albumPictures = pictures;
  }
}