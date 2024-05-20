import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
  
  movies : Movie[] = [];

  constructor(private movieService : MovieService, private router:Router) {}

  ngOnInit(): void {
      this.movieService.getAllMovies().subscribe(data => {
        this.movies = data;
      });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
