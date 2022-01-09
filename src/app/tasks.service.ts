import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { AngularFirestore } from '@angular/fire/firestore';

export interface B{
  authorized:boolean
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  line:any = "";
  inst:string= "";
  isAuthed:B = {"authorized": false};
  recipes = this.store.collection('recipes');
  constructor(private db: DatabaseService, private store:AngularFirestore) {}

  getRecipe(id:string){
    return this.db.get('recipe/'+id);
  }

  createRecipe(title:string,author:string,ingredients:string,measurements:string,description:string,tags:string,dir:string){
    return this.db.post('post-recipe',{
      "title": title,
      "author": author,
      "ingredients": ingredients,
      "measurements": measurements,
      "description": description,
      "tags": tags,
      "steps": dir
  });
  }

  uploadImage(id:string,img:any){
    
    console.log("upload");
    console.log(img);
    return this.db.post('image/'+id,img);
  }

  getMaxRecipeId(){
    return this.db.get('maxID');
  }
  getRandomRecipe(num:number){
    return this.db.get('random/'+num);
  }
  getInstructions(id:string){
    return this.db.get('instructions/'+id);
  }

  getSearch(keyword:string){
    return this.db.get('getRecipes/'+keyword);
  }

  getContents(){
    return this.db.get('getRecipes');
  }

  getFiveNew(){
    return this.db.get('fiveNew');
  }

  getFavorites(){
    return this.db.get('favorites');
  }

  setFavorite(id:string){
    return this.db.get('setFavorite/'+id);
  }

  removeFavorite(id:string){
    return this.db.delete('removeFavorite/'+id);
  }
  loginReq(username:string,password:string){
    
    let thing = this.db.post('login',{
      "username":username,
      "password":password,
    });
    
    return thing;
  }

  logOutReq(){
    this.isAuthed.authorized=false;
    return this.db.get('logout');
  }

  isLoggedIn(){
    try{
    let thing = this.db.get('isLoggedIn').toPromise().then(result=>{
      this.isAuthed.authorized=true;
      return result;
      });
      return thing.then(token=>{
        return token;
      });
    }
    catch(e){
      console.log(e);
      this.isAuthed.authorized=false;
      return;
    }
    
  }

  addGroceryList(id:string){
    return this.db.get('addGroceryItem/'+id);
  }

  
  
}
