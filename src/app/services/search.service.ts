import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { ApiResult } from '../models/api-result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = 'http://www.omdbapi.com/?apikey=50712902&'

  constructor(private http: HttpClient) { }

  getMovies(searchQuery: string) {
    return this.http.get<ApiResult>(`${this.baseUrl}s=${searchQuery}`).pipe(
      map(result => result.Search),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
