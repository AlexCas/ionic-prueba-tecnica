import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../register-service.service';
import { Storage } from '@ionic/storage';
import { User } from '../user';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Router } from '@angular/router';

@Component({		
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string;
  email: string;
  password: string;
  date: string;
  private _storage: Storage | null = null;

  constructor(
    public registerService: RegisterServiceService,
    public storage: Storage,
    private localNotifications: LocalNotifications,
		public router: Router
  ) {}

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  ngOnInit() {
    this.init();
    this.registerService.getUser().then((data) => {
      console.log(data);
      this.loadUser(data);
    });
  }

  loadUser(d) {
    const data = d.results[0];
    this.name = data.name.first;
    this.email = data.email;
    this.date = data.registered.date;
  }

  async registerUser() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      date: this.date,
    };

    await this._storage.set('user', user);

    this.localNotifications.schedule({
      id: 1,
      text: 'Usuario registrado con exito',
    });

		this.router.navigate(['/home']);
  }
}
