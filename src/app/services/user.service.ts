import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = "http://localhost:3000/api/user/edit/"; 
  constructor(private client: HttpClient) { }
  
  editPersonalInfo(info:any): Observable<any>{
    return this.client.post(this.URL + 'personal', info);
  }

  editSocialMedia(info:any): Observable<any>{
    return this.client.post(this.URL + 'social', info);
  }
}
