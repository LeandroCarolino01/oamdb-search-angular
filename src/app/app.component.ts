import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'omdb-search';
  movies: Movie[] = []
 

  constructor(private searchService: SearchService) { }

  ngOnInit() {

  }

  onSearchQueryInput(searchQuery: string) {
   
    this.searchService.getMovies(searchQuery.split(' ').join('+')).subscribe(movies => this.movies = movies)
  }
}
