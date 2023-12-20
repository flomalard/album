import { Component, EventEmitter, Output } from '@angular/core';
import { Album } from '../interfaces/album';
import { MOCK_ALBUMS } from '../mocks/albums';
import { NgForm } from '@angular/forms';
import { AlbumService } from '../album.service';
import { Picture } from '../interfaces/picture';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  
  albums: Album[] = MOCK_ALBUMS;
  selectedValue: string = "";
  
  @Output() searchEmitter = new EventEmitter<Picture[]>();

  constructor(private albumService: AlbumService) {}

  onSelect(form: NgForm) {
    const result: Picture[] = this.albumService.search(this.selectedValue);
    this.searchEmitter.emit(result);
  }

}