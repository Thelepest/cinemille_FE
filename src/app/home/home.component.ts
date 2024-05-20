import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  allMoviesNav() {
    this.router.navigate(['/all-movies']);
  }

  dateMoviesNav() {
    this.router.navigate(['/movies-by-date']);
  }

  expiredMoviesNav() {
    this.router.navigate(['/expired-movies'])
  }

}
