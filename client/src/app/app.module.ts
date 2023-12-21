import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './pages/homepage/albums/albums.component';
import { AlbumPicturesComponent } from './pages/homepage/album-pictures/album-pictures.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './pages/homepage/search/search.component';
import { FirstLetterMajPipe } from './pipes/first-letter-maj.pipe';
import { HomeComponent } from './pages/homepage/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumPicturesComponent,
    SearchComponent,
    FirstLetterMajPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
