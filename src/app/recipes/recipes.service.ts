import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingService } from "../shopping-list/shopping.service";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test Recipe 1",
      "Simple Test 1",
      "https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/02750-2%20BK_Web_DblQtrPndKing_500x540px_CR_0.png",
      [new Ingredient("tomato", 3), new Ingredient("potito", 6)]
    ),
    new Recipe(
      "Other test Recipe",
      "Simple Test 2",
      "https://www.soscuisine.com/media/images/recettes/very_large/48.jpg",
      [new Ingredient("tomato", 2), new Ingredient("potito", 3)]
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }
  constructor(private shoppingService: ShoppingService) {}
  addIngredientsToShppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
