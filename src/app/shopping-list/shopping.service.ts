import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("appels", 5),
    new Ingredient("tomatoes", 9)
  ];
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
