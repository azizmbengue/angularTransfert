import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient:HttpClient, private sanitize: DomSanitizer){}
  register(User){
    return this.HttpClient.post<any>(`${environment.apiUrl}/api/users`,User);
  }
  
  getAllUser(){
    return this.HttpClient.get<any>(`${environment.apiUrl}/api/users.json`);
  }
  bloquer(id,status){
    return this.HttpClient.put<any>(`${environment.apiUrl}/api/users/${id}`,{ "isActive" : status});
  }
  
  
}