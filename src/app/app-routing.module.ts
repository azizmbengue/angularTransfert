import { CompteComponent } from './components/compte/compte.component';
import { ListerUsersComponent } from './components/lister-users/lister-users.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutUserComponent } from './components/ajout-user/ajout-user.component';


const routes: Routes = [
  {path:'login',component:ConnexionComponent},
  {path:'adduser',component:AjoutUserComponent},
  {path: 'list-users',
   component: ListerUsersComponent},
  
  {path:'compte',component:CompteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
