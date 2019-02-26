import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingService } from "./shopping.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  constructor(private shoppingService: ShoppingService) {}
  private subscription: Subscription;
  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientsChanged.subscribe(
      (listIngredients: Ingredient[]) => {
        this.ingredients = listIngredients;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
