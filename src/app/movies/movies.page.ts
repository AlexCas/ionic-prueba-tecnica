import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modals/modal/modal.page';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies: any;
	moviesSearch: any;
  query: string;

  constructor(public moviesService: MoviesServiceService, public modalController: ModalController) {}

  async init() {
    const data = await this.moviesService.getMovies();
    console.log(data);
    this.movies = data;
  }

  ngOnInit() {
    this.init();
  }

  async searchMovie() {
    const data = await this.moviesService.searchMovie(this.query);
    console.log(data);
		this.movies = [];
    this.moviesSearch = data;
  }

	async openModal(movie) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        "movie": movie,        
      }
    });

    return await modal.present();
  }
}
