import { Component } from '@angular/core';
import { Picture } from '../interfaces/picture';
import { MOCK_PICTURES } from '../mocks/pictures';

@Component({
  selector: 'app-album-pictures',
  templateUrl: './album-pictures.component.html',
  styleUrl: './album-pictures.component.scss'
})
export class AlbumPicturesComponent {

  pictures: Picture[] = MOCK_PICTURES;
  
}
