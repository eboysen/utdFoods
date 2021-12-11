import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { ContentsComponent } from './contents/contents.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NavComponent } from './nav/nav.component';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FavoritesComponent } from './favorites/favorites.component';
import { GroceryComponent } from './grocery/grocery.component';
import { AboutComponent } from './about/about.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRipple, MatRippleModule } from '@angular/material/core';
import { UserPageComponent } from './user-page/user-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentsComponent,
    NewRecipeComponent,
    RecipeComponent,
    NavComponent,
    LoginComponent,
    FavoritesComponent,
    GroceryComponent,
    AboutComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFileUploaderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    FlashMessagesModule.forRoot(),
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatRippleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
