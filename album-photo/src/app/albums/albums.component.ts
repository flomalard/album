import { Component, OnInit } from '@angular/core';
import { Albums } from '../interfaces/albums';
import { MOCK_ALBUMS } from '../mocks/albums';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit {

  albums: Albums[] = MOCK_ALBUMS;

  currentNavIndex: number = 1;
  albumsPerNav: number = 2;
  maxNavIndex: number = Math.ceil((this.albums.length)/this.albumsPerNav);

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadNav(this.currentNavIndex);
  }

  loadNav(page: number) {
    const start = (page -1) * this.albumsPerNav;
    const end = start + this.albumsPerNav
    this.albums = this.albumService.navPaginate(start,end);
    this.currentNavIndex = page;
  }
  
}
