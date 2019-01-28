import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test Recipe",
      "Simple Test",
      "http://downloads.bbc.co.uk/skillswise/entry12/english/en05skim/images/en05skim-e2-w-scanning-a-recipe-tikka-masala-592x838.jpg"
    ),
    new Recipe(
      "A test Recipe",
      "Simple Test",
      "http://downloads.bbc.co.uk/skillswise/entry12/english/en05skim/images/en05skim-e2-w-scanning-a-recipe-tikka-masala-592x838.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
