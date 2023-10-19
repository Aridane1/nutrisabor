import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { LoginComponent } from './views/login/login.component';
import { FormComponent } from './components/form/form.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './components/card/card.component';
import { AccountComponent } from './views/account/account.component';
import { SearchComponent } from './views/search/search.component';
import { ContactComponent } from './views/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './views/recipes/recipes.component';
import { CarruselComponent } from './views/home/carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    FormComponent,
    MenuComponent,
    RegisterComponent,
    HomeComponent,
    CardComponent,
    AccountComponent,
    SearchComponent,
    ContactComponent,
    RecipesComponent,
    CarruselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
