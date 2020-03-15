import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }
  getRoles() {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/profiles.json`);
  }
  getRole(role) {
    return this.httpClient.get<any>(`${environment.apiUrl}/${role}`);
  }
}
