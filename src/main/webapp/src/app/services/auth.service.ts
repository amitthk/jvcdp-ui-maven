import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../app/app.settings';
import { UserLogin } from '../models/index';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  private apiUrl: String;

  constructor(private http: Http) {
    this.apiUrl = AppSettings.API_ENDPOINT + '/auth';
  }

  login(loginInfo: UserLogin): Observable<Response> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = { 'headers': headers, 'observe': 'response' };
    return this.http.post(this.apiUrl + '/login', loginInfo, options);
  }

  logout(): void{
    localStorage.removeItem('authToken');
  }

}
