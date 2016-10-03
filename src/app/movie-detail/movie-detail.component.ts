import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  providers: [MoviesService],
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie:Movie;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // ngOnInit() {
  //   this.getMovie();
  // }

  getMovie(id): void {
    this.moviesService.getMovie(id).then(movie => {
      this.movie = movie;
      console.log(this.movie);
    });
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getMovie(id);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
