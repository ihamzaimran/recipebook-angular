import {Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('A test recipe', 'This is a simply a test recipe', 'https://www.simplyrecipes.com/thmb/U2TZfTi9aWVC_tZ4uqWltnICaXI=/3376x2532/smart/filters:no_upscale()/Simply-Recipes-Homemade-Pizza-LEAD-1-3964903118d1494cad90e7602c538cbb.jpg',
  //     [new Ingredient('Flour', 1),
  //       new Ingredient('Cheese', 1)
  //     ]),
  //   new Recipe('Another test recipe', 'This is a simply a test recipe', 'https://www.simplyrecipes.com/thmb/U2TZfTi9aWVC_tZ4uqWltnICaXI=/3376x2532/smart/filters:no_upscale()/Simply-Recipes-Homemade-Pizza-LEAD-1-3964903118d1494cad90e7602c538cbb.jpg',
  //     [new Ingredient('Cheese', 1),
  //               new Ingredient('Flour', 1)]
  //   )
  // ];

  private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
      return this.recipes[index];
  }

  AddIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
