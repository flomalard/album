import { Component, EventEmitter, Output } from '@angular/core';
import { Album } from '../../../interfaces/album';
import { MOCK_ALBUMS } from '../../../mocks/albums';
import { NgForm } from '@angular/forms';
import { AlbumService } from '../../../services/album.service';
import { Picture } from '../../../interfaces/picture';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  
  albums: Album[] = [];
  selectedValue: string = "";
  
  @Output() searchEmitter = new EventEmitter<Picture[]>();

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    //plus besoin du mock
    this.albumService.findAlbums().subscribe((albums: Album[] | any) => {
      this.albums = albums;
    });
  }

  /* onSelect(form: NgForm) {
    const result: Picture[] = this.albumService.search(this.selectedValue);
    this.searchEmitter.emit(result);
  } */

  onSelect(form: NgForm) {
    this.albumService.search(this.selectedValue).subscribe((result: Picture[]) => {
      console.log(this.selectedValue)
      this.searchEmitter.emit(result);
    });
  }

}