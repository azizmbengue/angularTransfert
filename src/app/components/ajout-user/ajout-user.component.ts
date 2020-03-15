import { map } from 'rxjs/operators';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})
export class AjoutUserComponent implements OnInit {
  registerForm:FormGroup;
  profile;
  iri=`/api/profiles/`;

  constructor(private profiles: ProfileService,private formBuilder: FormBuilder,private userService: UserService){ }
 
  ngOnInit() {
     // tslint:disable-next-line:quotemark
     this.profile = this.profiles.getRoles().pipe(map((array) => array.filter(profile => profile.libelle !== "ADMIN_SYSTEM"))).subscribe(
      data => {
        console.log(data);
        this.profile = data;
}
);
this.registerForm = this.formBuilder.group({
  password: ['', Validators.required],
  profile: ['', Validators.required],
  username: ['', Validators.required]
});
}
 // recuperation facile des champs

 onSubmit() {
  // changement de valeur id-profil en iri /api/profil/id
  const user = {
    username: this.registerForm.value.username,
    password: this.registerForm.value.password,
    profile: `api/profiles/${this.registerForm.value.profile}`
  };
  console.log(user);

  // this.f.profil.setValue(${this.iri}${this.f.profil.value});
  // creation d'un user
  this.userService.register(user).subscribe(
    data => {
      console.log(data);
    },
   error => {
      console.log(error);

    }
  );
}
}
