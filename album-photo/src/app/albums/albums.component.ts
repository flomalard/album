import { Component } from '@angular/core';
import { Albums } from '../interfaces/albums';
import { MOCK_ALBUMS } from '../mocks/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {

  albums: Albums[] = MOCK_ALBUMS;
  
}
