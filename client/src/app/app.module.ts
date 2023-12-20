import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumPicturesComponent } from './album-pictures/album-pictures.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FirstLetterMajPipe } from './first-letter-maj.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumPicturesComponent,
    SearchComponent,
    FirstLetterMajPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
