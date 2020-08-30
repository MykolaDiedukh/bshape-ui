import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Constants} from '../contants';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  registrationNewUser(user: any): Observable<any> {
    return this.http.post(Constants.CREATE_USER, user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(Constants.LOGIN_USER, user);
  }
}
