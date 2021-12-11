import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  surprise = 0;
  loggedIn;
  constructor(private task:TasksService,private router:Router) { 
    this.loggedIn = task.isAuthed;
  }

  ngOnInit(): void {
    
  }
  sup(){
    this.task.getRandomRecipe(1).subscribe((response:any)=>{
      console.log(response);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(["recipe/"+response[0].id]);
    }); 
    });
    
  }

  returnHome(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/"]);
  }); 
  }

  recipeListLink(){
    this.Search("");
  }

  

  aboutLink(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/about"]);
  }); 
  }

  loginLink(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/login"]);
  }); 
  }

  groceryLink(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/grocery-list"]);
  }); 
  }

  favoritesLink(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/favorites"]);
    }); 
  }

  userLink(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/user-page"]);
    }); 
  }

  logout(){
    this.task.logOutReq().subscribe((res)=>{
      console.log(res);
    });
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/login"]);
  }); 
  }

  Search(value:any){
    console.log(value);
    if(value!=undefined){
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(["/recipe-list"],{queryParams:{keyword:value}});
      }); 
    }
    else{
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(["/recipe-list"]);
      });
    }
  }

}
