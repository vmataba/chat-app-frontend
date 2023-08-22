import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headers } from '../helpers/http.helper';
import { Injectable } from '@angular/core';
import { User } from '../store/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any) {
    const { username, password } = credentials;
    return this.http.post<User>(
      '/api/auth/login',
      {},
      {
        headers: new HttpHeaders({
          Authorization: 'Basic ' + btoa(username + ':' + password),
        }),
      }
    );
  }

  logout(){
    return this.http.get<boolean>('/api/auth/logout',{headers}) 
  }

  signup(user:any){
    return this.http.post<User>('/api/auth/signup',user)
  }
}
