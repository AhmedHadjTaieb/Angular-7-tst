import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredients.model";
import { ShoppingService } from "../shopping.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("inputName") inputNameRef: ElementRef;
  @ViewChild("inputAmount") inputAmountRef: ElementRef;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {}

  onAddIngredient() {
    const ingredient = new Ingredient(
      this.inputNameRef.nativeElement.value,
      this.inputAmountRef.nativeElement.value
    );
    this.shoppingService.addIngredient(ingredient);
  }
}
