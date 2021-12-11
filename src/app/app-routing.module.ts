import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { HomeComponent } from './home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { GroceryComponent } from './grocery/grocery.component';
import { AboutComponent } from './about/about.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'recipe/:id', component:RecipeComponent },
  { path: 'new-recipe',component:NewRecipeComponent },
  { path: 'recipe-list',component:ContentsComponent},
  { path: 'login',component:LoginComponent},
  { path: 'favorites',component:FavoritesComponent },
  { path: 'grocery-list',component:GroceryComponent },
  { path: 'about', component:AboutComponent },
  { path: 'user-page', component:UserPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
