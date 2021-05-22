import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  apiURL = 'https://ng-course-recipe-b5521-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {  }

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.apiURL + '/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }


  fetchRecipes() {
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.get<Recipe[]>(this.apiURL + '/recipes.json?'
      ).pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []};
          });
        })
      );
    }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
    }
}
