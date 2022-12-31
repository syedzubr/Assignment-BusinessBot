import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersPostsService {

  constructor(private http: HttpClient) { }

  rootURL = "https://637de434cfdbfd9a63a00317.mockapi.io/test/v2";

  getUsers() {
    return this.http.get<any[]>(this.rootURL + '/users');
  }

  getUserPost(ID: number) {
    return this.http.get<any[]>(this.rootURL + `/users/${ID}/posts`)
  }

  addPost(ID: number, body: any) {
    return this.http.post<any>(this.rootURL + `/users/${ID}/posts`, body);
  }

}
