import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: Array<any> = [];
  cards: Array<any> = [];
  public miToken: number;
  public userName: string | null;
  constructor(private recipeService: RecipesService) {
    this.miToken = 0;
    this.userName = '';
  }
  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }

    this.recipes = this.recipeService.getAllRecipes();

    const numerosAleatorios: number[] = [];
    const indicesDisponibles: number[] = Array.from(
      { length: this.recipes.length },
      (_, i) => i
    );

    for (let i = 0; i < 3; i++) {
      if (indicesDisponibles.length > 0) {
        const indiceAleatorio = Math.floor(
          Math.random() * indicesDisponibles.length + 1
        );
        const indiceElegido = indicesDisponibles[indiceAleatorio];
        numerosAleatorios.push(indiceElegido);
        indicesDisponibles.splice(indiceAleatorio, 1);
      }
    }

    for (const indice of numerosAleatorios) {
      if (indice >= 0 && indice < this.recipes.length) {
        this.cards.push(this.recipes[indice]);
      }
    }
  }
}
