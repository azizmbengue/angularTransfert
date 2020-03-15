import { User } from './../../models/user';
import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {
  FormConnexion: FormGroup;
  
  constructor(
    private auth:AuthentificationService,
    private router:Router 
  ) { }

  ngOnInit() {
    this.FormConnexion = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
  onConnexion(){
    console.log(this.FormConnexion.value);
    const user={
      username:this.FormConnexion.value.username, 
      password:this.FormConnexion.value.password
    } as User
    this.auth.getConnexion(user).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/adduser']);
      },
      erreur=>{
        console.log(erreur);

      }
    )
  }

}
