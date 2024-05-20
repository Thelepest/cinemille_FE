import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieExpiredComponent } from './movie-expired.component';

describe('MovieExpiredComponent', () => {
  let component: MovieExpiredComponent;
  let fixture: ComponentFixture<MovieExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieExpiredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
