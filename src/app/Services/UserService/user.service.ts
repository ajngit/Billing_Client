import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../appsettings';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http :HttpClient) { }

  Authenticate( data: any): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) 
    });
  }
}
