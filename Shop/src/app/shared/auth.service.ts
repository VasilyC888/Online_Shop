import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: any) {
    console.log(user);
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomPassword?key=${environment.apiKey}`, user);
  }
}
