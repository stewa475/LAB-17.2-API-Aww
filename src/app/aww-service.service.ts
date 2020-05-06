import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class AwwServiceService {
  apiUrl = 'https://www.reddit.com/r';

  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get<Posts>(`${this.apiUrl}/aww/.json`);
  }
}
