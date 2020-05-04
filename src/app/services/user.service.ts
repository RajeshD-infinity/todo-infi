import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private _http: HttpClient) { }

  login(email, password) {
    // return this._http.get(`${this.BASE_URL}/users?email=${email}&password=${password}`);
    return this._http.get('https://jsonplaceholder.typicode.com/users/1'); 
  }
}
