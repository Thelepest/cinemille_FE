import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private rootUrl = "http://localhost:8080/api/v1/movies";

  constructor(private http:HttpClient) { }

  getAllMovies() : Observable<Movie[]> {
    return this.http.get<Movie[]>(this.rootUrl);
  }

  getMoviesFromRangeOfDates(startDate:string, endDate:string) : Observable<any[]>{
      return this.http.get<any[]>(this.rootUrl+'/between/'+startDate+'/'+endDate);
  }

  getExpiredMovies() : Observable<any[]> {
      return this.http.get<any[]>(this.rootUrl+'/expired');
  }

}
