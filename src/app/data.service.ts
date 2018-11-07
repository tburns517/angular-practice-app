import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }

  getStats(): Observable<any> {
    return this.http.get('./assets/user-stats.json')
  }

  getPosts(): Observable<any> {
    return this.http.get(this.ROOT_URL + '/posts');
  }

  createPost(): Observable<any> {
    const data = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World!'
    }

    return this.http.post(this.ROOT_URL + '/posts', data)
  }

}
