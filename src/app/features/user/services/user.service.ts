import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserReq } from '../models/user-req.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserReq[]> {
    return this.http.get<UserReq[]>(`${this.API_URL}/users`);
  }
}
