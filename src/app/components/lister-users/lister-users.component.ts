import { Profile } from 'selenium-webdriver/firefox';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from './../../services/user.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lister-users',
  templateUrl: './lister-users.component.html',
  styleUrls: ['./lister-users.component.scss']
})
export class ListerUsersComponent implements OnInit {
  dataUsers: any;

  constructor(
    private userService: UserService,private profile:ProfileService
  ) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(
      data=> {
        this.dataUsers = data;
        console.log(data);
      }
    )
  }
  onStatus(id: number,status)
  {
    this.userService.bloquer(id,!status).subscribe( data => {
      alert(status)
      this.userService.getAllUser().subscribe(
        data=> {
          this.dataUsers = data;
          console.log(data);
        }
      )
      
    })
  }



  getRole(r){

    this.profile.getRole(r).subscribe(
      data=> {
        console.log(data)
        return data.libelle;
      }
    )


  }

}
