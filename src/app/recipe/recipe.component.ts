import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ingredient } from 'src/ingredient';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  id = "";
  title = "";
  description  = "";
  author = "";
  ingredients ="";
  measurements ="";
  ingArr:ingredient[]=[];
  instr:any=[];
  inst:any="";
  link ="";
  empty = "";
  favorite = false;
  color="White";
  user:any;
  constructor(private task:TasksService,private route:ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    try{
      this.user = await this.task.isLoggedIn()?.then(token=>token);
      }catch(e){
        this.user = {name:""};
      }
    this.route.params.subscribe(params=>{
      console.log(params);
      this.id = params['id'];
    });
    console.log(this.id);
    this.getTheOne(this.id);
    this.getFavorites();
    this.task.getInstructions(this.id).subscribe((response:any)=>{
      this.inst = response;
      console.log(this.inst);
      const instructions=[];
      while(this.inst.indexOf(",") >-1){
        instructions.push(this.inst.substring(0,this.inst.indexOf(",")));
        this.inst = this.inst.substring(this.inst.indexOf(",")+1,this.inst.length);
      }
      instructions.push(this.inst);
      this.inst="";
      console.log(instructions);
      this.instr = instructions;
      console.log(this.instr);
    });
  }

  getTheOne(value:string){
    this.task.getRecipe(value).subscribe((response:any)=>{
      console.log(response);
      this.id=response[0].id;
      this.title=response[0].title;
      this.description=response[0].description;
      this.author=response[0].author;
      this.ingredients=response[0].ingredients;
      this.measurements=response[0].measurements;
      this.link = "http://localhost:3000/images/"+this.id;
      console.log(this.ingredients);
      console.log(this.measurements);
      this.parseIngredients();
    });
    
  }

  getFavorites(){
    this.task.getFavorites().subscribe((results:any)=>{
      for(let x = 0; x<results.length; x++){
        if(this.id === results[x].id){
          this.favorite = true;
          return;
        }
        else
          this.favorite = false;
      }
    });
  }

  parseIngredients(){
    this.ingArr=[];
    while(this.ingredients.search(',')>0){
      const currentIng = this.ingredients.substring(0,this.ingredients.search(','));//find commas
      const currentMes = this.measurements.substring(0,this.measurements.search(','));
      const ing:ingredient = {ingredient:currentIng,measurement:currentMes}//create obj
      this.ingArr.push(ing);

      this.ingredients=this.ingredients.substring(this.ingredients.search(',')+1,this.ingredients.length);//shorten strings
      this.measurements=this.measurements.substring(this.measurements.search(',')+1,this.measurements.length);
    }
    const currentIng = this.ingredients.substring(0,this.ingredients.length);//grab last items w/o commas
    const currentMes = this.measurements.substring(0,this.measurements.length);
    const ing:ingredient = {ingredient:currentIng,measurement:currentMes}
    this.ingArr.push(ing);
  }

  changeFav(status:boolean,id:string){
    if(status){
      this.task.removeFavorite(id).subscribe((res)=>{
        console.log(res);
      });
      this.favorite = !status;
    }
    else{
      this.task.setFavorite(id).subscribe((res)=>{
        console.log(res);
      });
      this.favorite = !status;
    }
  }

  addToList(id:string){
    this.task.addGroceryList(id).subscribe((results)=>{
      window.alert("Item added to grocery list");
    },(error)=>{
      window.alert("Please log in to access the grocery list");
    });
  }

}
