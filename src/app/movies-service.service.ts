import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  urlSearchMovies = 'http://api.tvmaze.com/search/shows?q=/';
  urlAllMovies = 'http://api.tvmaze.com/schedule/full';

  constructor(public http: HttpClient) {}	

  getMovies() {
    return new Promise((resolve) => {
      this.http.get(this.urlAllMovies).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  searchMovie(query: string) {
    return new Promise((resolve) => {
      this.http.get(this.urlSearchMovies + query).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
