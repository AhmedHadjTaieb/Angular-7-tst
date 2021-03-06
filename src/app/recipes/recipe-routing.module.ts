import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";

const routes: Routes = [
  {
    path: "",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipesDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
