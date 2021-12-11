import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})

export class NewRecipeComponent implements OnInit {
  fileName="";
  user:any;
  recipe: FormGroup;
  arrayItems:FormArray;
  controls:FormControl[];
  steps:FormArray;
  control2:FormControl[];
  title:FormControl;
  author:FormControl;
  tags:FormControl;
  description:FormControl;
  @ViewChild('myFile') fileInput:HTMLInputElement;
  formData:FormData;
  //ingredients = new FormArray([])
  
  constructor(private task:TasksService, private router:Router,private formBuilder:FormBuilder) { 
    this.recipe = this.formBuilder.group({
      title:'',
      author:'',
      tags:'',
      description:'',
      ingredients: this.formBuilder.array([]),
      step: this.formBuilder.array([])
    });
    
  }



  async ngOnInit(): Promise<void> {
    //console.log(this.ingredients);
    try{
      this.user = await this.task.isLoggedIn()?.then(token=>token);
      if(this.user.authorized != 'admin'){
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(["/login"]);
          });
      }
      }catch(e){
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(["/login"]);
          });
      }
      this.arrayItems = this.recipe.get('ingredients') as FormArray;
      this.controls = this.arrayItems.controls as FormControl[];

      this.steps = this.recipe.get('step') as FormArray;
      this.control2 = this.steps.controls as FormControl[];

      this.title = this.recipe.get('title') as FormControl;
      this.author = this.recipe.get('author') as FormControl;
      this.tags = this.recipe.get('tags') as FormControl;
      this.description = this.recipe.get('description') as FormControl;
  }

  createIngredient(){
    this.arrayItems.push(new FormControl(''));
    this.arrayItems.push(new FormControl(''));
    console.log(this.arrayItems);
  }

  addStep(){
    this.steps.push(new FormControl(''));
  }

  //Function to get the file that was chosen and upload it to the backend
  onFileSelected(event:any, id:string){
    const file:File = event.target.files[0];//grabs file
    if(file){
      this.fileName = file.name;
      this.formData = new FormData();//create payload obj
      this.formData.append("exampleImg",file);

      //const upload$=this.task.uploadImage(id,this.formData);//upload using the id number and the form data
      //upload$.subscribe();
    }
  }

  submit(){
    console.log(this.recipe.value);
    let ing = this.recipe.value.ingredients[0];
    let mes = this.recipe.value.ingredients[1];
    for(let i=2; i<this.recipe.value.ingredients.length;i+=2){
      ing += ', '+this.recipe.value.ingredients[i];
      mes += ', '+this.recipe.value.ingredients[i+1];
    }

    let dir = this.recipe.value.step[0];
    for(let i = 1; i<this.recipe.value.step.length;i++){
      dir += ', '+this.recipe.value.step[i];
    }

    console.log(ing);
    console.log(mes);

    this.task.createRecipe(this.recipe.value.title,this.recipe.value.author,ing,mes,this.recipe.value.description,this.recipe.value.tags,dir).subscribe((res:any)=>{
      console.log(res);
      console.log(res[0].id);
      try{
        
        if(this.fileName != null){
          const upload$=this.task.uploadImage(res[0].id,this.formData);//upload using the id number and the form data
          upload$.subscribe();
        }
      }
      catch{
        console.log('not working');
      }
      
    });
  }
  

}
