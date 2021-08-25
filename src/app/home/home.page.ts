import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  password: string;

  constructor(
    private router: Router,
    public storage: Storage,
    private localNotifications: LocalNotifications
  ) {}

  async login() {
    try {
      const user = await this.storage.get('user');
      console.log(user);
      if (this.email === user.email && this.password === user.password) {
        console.log('Usuario valido');
        this.localNotifications.schedule({
          id: 1,
          text: 'Bienvenido ' + user.name,
        });

        this.router.navigate(['/movies']);
      } else {
        console.log('Error. No existe el usuario');
        this.localNotifications.schedule({
          id: 1,
          text: 'No existe el usuario.',
        });
      }
    } catch (err) {
      console.log('Error. No hay usuarios registrados.');
      this.localNotifications.schedule({
        id: 1,
        text: 'Error. No hay usuarios registrados.',
      });
    }
  }

  goToRegisterPage() {
    this.router.navigate(['/register']);
  }
}
