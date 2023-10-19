import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { AccountComponent } from './views/account/account.component';
import { SearchComponent } from './views/search/search.component';
import { ContactComponent } from './views/contact/contact.component';
import { RecipesComponent } from './views/recipes/recipes.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'search', component: SearchComponent },
  { path: 'recipes/:id', component: RecipesComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
