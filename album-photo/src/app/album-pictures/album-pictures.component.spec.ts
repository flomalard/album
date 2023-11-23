import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPicturesComponent } from './album-pictures.component';

describe('AlbumPicturesComponent', () => {
  let component: AlbumPicturesComponent;
  let fixture: ComponentFixture<AlbumPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumPicturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
