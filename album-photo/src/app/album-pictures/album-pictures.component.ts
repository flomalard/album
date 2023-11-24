import { Component, Input } from '@angular/core';
import { Picture } from '../interfaces/picture';

@Component({
  selector: 'app-album-pictures',
  templateUrl: './album-pictures.component.html',
  styleUrl: './album-pictures.component.scss'
})
export class AlbumPicturesComponent {

  @Input() pictures!: Picture[];
  
}