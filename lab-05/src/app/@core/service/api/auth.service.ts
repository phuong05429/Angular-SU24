import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ENDPOINT } from 'src/app/config/api.config';


export interface Ilogin {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
// export class AuthService {
//   constructor(private _http: HttpClient) {}

//   login(data: Ilogin): Observable<any> {
//     return this._http.post<any>(
//       'https://knowledgehub.demopolyct.online/api/auth/login',
//       {
//         email: data.email,
//         password: data.password,
//       }
//     );
//   }
// }
export class AuthService {
  loginForm!: Ilogin;

  constructor(
    private _http: HttpClient,

  ) { }
  login(data: Ilogin): Observable<any>{
    return this. _http.post(API_BASE_URL + API_ENDPOINT.auth.login,{
      email: data.email,
      password: data.password
    })
  }
}
