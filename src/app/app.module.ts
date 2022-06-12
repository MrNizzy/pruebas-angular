import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

/* Importing the components */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesServices } from './countries/countries.service';
import { InicioComponent } from './inicio/inicio.component';

/* app routes angular constant */ 
const appRoutes: Routes = [
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'countries', component: CountriesComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    CountriesComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CountriesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
