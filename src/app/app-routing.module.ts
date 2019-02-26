import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";

const routes: Routes = [
  {
    path: "recipes",
    loadChildren: "./recipes/recipe.module#RecipeModule"
  },
  { path: "shopping-list", component: ShoppingListComponent },
  { path: "", redirectTo: "/recipes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
