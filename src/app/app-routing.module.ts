import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDatesComponent } from './movie-dates/movie-dates.component';
import { MovieExpiredComponent } from './movie-expired/movie-expired.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {path: '', component: DefaultComponent},
  {path : 'all-movies', component: MovieComponent},
  {path : 'movies-by-date', component:MovieDatesComponent},
  {path:'expired-movies',component:MovieExpiredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
