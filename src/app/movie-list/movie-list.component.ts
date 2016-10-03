import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  providers: [MoviesService],
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  SelectedMovie: Movie;

  constructor(
    private router: Router,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies().then(movies => {
      this.movies = movies;
      console.log(this.movies);
    });
  }

  gotoDetail(movie: Movie, event): void {
    event.preventDefault();
    let link = ['/detail', movie.id];
    this.router.navigate(link);
  }


}
