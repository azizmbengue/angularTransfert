import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Profile } from 'selenium-webdriver/firefox';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private HttpClient:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

  }


  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }


  getConnexion(User:User){
    console.log(environment.apiUrl);
    return this.HttpClient.post<User>(`${environment.apiUrl}/api/login_check`,User)
    .pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user); 
      return user;
  }))

  }
  getRoles(){
   
    return this.HttpClient.get<Profile>(`${environment.apiUrl}/api/profiles.json`)
    }
  
  }
 

