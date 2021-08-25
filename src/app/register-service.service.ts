import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterServiceService {
  url = 'https://randomuser.me/api';

  constructor(public http: HttpClient) {}

  getUser() {
    return new Promise((resolve) => {
      this.http.get(this.url).subscribe(
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
