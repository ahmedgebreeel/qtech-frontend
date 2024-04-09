import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/api/auth/';
  constructor(private client : HttpClient) { }

  login(user:any): Observable<any>{
    return this.client.post(this.url+ 'login', user);
  }

  register(newUser:any):Observable<HttpResponse<any>>{
    return this.client.post(this.url+ 'register', newUser, {observe: 'response'}); 
  }
}
