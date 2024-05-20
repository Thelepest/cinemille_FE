import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-dates',
  templateUrl: './movie-dates.component.html',
  styleUrl: './movie-dates.component.css'
})
export class MovieDatesComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) { }

  getMoviesByDate() {
    if (this.startDate && this.endDate) {
      const start = this.startDate.toISOString().split('T')[0];
      const end = this.endDate.toISOString().split('T')[0];
      this.movieService.getMoviesFromRangeOfDates(start, end).subscribe(data => {
        this.movies = data;
      });
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
