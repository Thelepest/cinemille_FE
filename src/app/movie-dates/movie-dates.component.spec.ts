import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDatesComponent } from './movie-dates.component';

describe('MovieDatesComponent', () => {
  let component: MovieDatesComponent;
  let fixture: ComponentFixture<MovieDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
