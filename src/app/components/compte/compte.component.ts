import { Profile } from './../../models/profile';
import { User } from './../../models/user';
import { CompteService } from './../../services/compte.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  compteForm: FormGroup;
  data: any
  comptes: any
  constructor( 
    private  CompteService: CompteService
  ) { }

  ngOnInit() {
    this.compteForm = new FormGroup(
    {
        numero: new FormControl(''),
        partenaire: new FormGroup({
          ninea: new FormControl(''),
          rc: new FormControl(''), 
          users: new FormGroup({
            username: new FormControl(''),
            password: new FormControl(''),
          }),
      }),
        depots: new FormGroup({
        montant: new FormControl('')
        }
        )
   });
  }
   create() {
     const partenaire = this.compteForm.value.partenaire;
     const registreCommercial = partenaire.rc;
     const nine = partenaire.ninea;
     const userCompte =partenaire.user;
     const userna = userCompte.username;
     const pass = userCompte.password;
     const montantdepot = this.compteForm.value.depots.montant;
     console.log(userCompte);


     this.CompteService.create({
      partenaire: {
        rc: registreCommercial,
        ninea: nine,
        userCompte: [{
          username: userna,
          password: pass,
        }]
      },
      depot: [{
        montant: montantdepot
      }]
    }).subscribe(
      data => {
       console.log(data);
      },
      error => {
        console.log(error);
      }
     

     )
    
   
}
}
