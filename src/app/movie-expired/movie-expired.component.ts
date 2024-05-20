import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-expired',
  templateUrl: './movie-expired.component.html',
  styleUrl: './movie-expired.component.css'
})
export class MovieExpiredComponent {

  movies : Movie[] = [];

  constructor(private movieService : MovieService, private router:Router) {}

  ngOnInit(): void {
      this.movieService.getExpiredMovies().subscribe(data => {
        this.movies = data;
      });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
