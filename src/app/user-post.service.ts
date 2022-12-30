import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {

  constructor(private http: HttpClient) { }

  rootURL = "https://637de434cfdbfd9a63a00317.mockapi.io/test/v2";

  getAppointments() {
    return this.http.get<any[]>(this.rootURL + '/users');
  }

}
