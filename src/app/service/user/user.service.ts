import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  login(data: any) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(environment.api_url + '/api/authenticate', data)
        .subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  register(data: any) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(environment.api_url + '/api/register', data)
        .subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
}
