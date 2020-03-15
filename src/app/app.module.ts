import { JwtInterceptorService } from './helpers/jwt-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AjoutUserComponent } from './components/ajout-user/ajout-user.component';
import { ListerUsersComponent } from './components/lister-users/lister-users.component';
import { CompteComponent } from './components/compte/compte.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormConnexionComponent,
    AjoutUserComponent,
    ListerUsersComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
