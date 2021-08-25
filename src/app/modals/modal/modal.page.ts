import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  movie: any;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}
  ngOnInit() {
    console.table(this.navParams);
    this.movie = this.navParams.data.movie;
  }

  async closeModal() {
    const onClosedData: string = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }
}
