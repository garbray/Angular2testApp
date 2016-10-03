import { Injectable } from '@angular/core';

import { Movie } from '../interfaces/movie';
import { MOVIES } from '../mocks/movies';

@Injectable()
export class MoviesService {

  getMovies():Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

  getMovie(id: number): Promise<Movie> {
    return this.getMovies()
      .then(movies => movies.find(Movie => Movie.id === id));
  }
}


