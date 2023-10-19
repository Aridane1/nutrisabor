import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/shared/services/recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {
    this.route.params.subscribe((params) => {
      this.recipe = this.recipesService.getOneRecipe(params['id']);
    });
  }
}
