import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipesComponent } from "./recipes.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipeItemComponent } from "./recipes-list/recipe-item/recipe-item.component";
import { RecipesService } from "./recipes.service";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";

@NgModule({
  imports: [CommonModule, RecipeRoutingModule],
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeEditComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent
  ],
  providers: [RecipesService]
})
export class RecipeModule {}
