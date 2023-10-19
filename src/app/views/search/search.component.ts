import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searcher: string;
  recipes: Array<any> = [];
  results: string[] = [];

  public miToken: number;
  public userName: string | null;
  constructor(private recipeService: RecipesService) {
    this.searcher = '';
    this.miToken = 0;
    this.userName = '';
  }
  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
    this.recipes = this.recipeService.getAllRecipes();
  }
  onSearch() {
    if (this.searcher.trim() === '') return this.recipes;
    return this.recipes.filter((recipe) => {
      return recipe.nombre.toLowerCase().includes(this.searcher.toLowerCase());
    });
  }
}
