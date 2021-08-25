import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';

import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './home/home.page';
import { RegisterPage } from './register/register.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import {MoviesPage} from './movies/movies.page';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomePage },
      { path: 'register', component: RegisterPage },
			{ path: 'movies', component: MoviesPage }
    ]),
  ],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
