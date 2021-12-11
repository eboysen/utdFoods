import { Component, OnInit } from '@angular/core';
import { trigger,state,style,animate,transition} from '@angular/animations';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ingredient } from 'src/ingredient';
import { HttpClient } from '@angular/common/http';
import { recipe } from 'src/recipe';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[trigger('slide',[
    state('inactive',style({opacity:0})),
    state('active',style({})),
    transition('inactive => active',[animate("1000ms",style({opacity:1}))]),
    transition('active => inactive',[animate("500ms",style({opacity:0}))])
])]
})

export class HomeComponent implements OnInit {
  title="";
  link = "";
  empty= "";
  current=2;
  left = 1;
  left2 = 0;
  right = 3;
  right2=4;
  highlights:recipe[]=[];
  new:recipe[]=[];
  timeLeft:number = 10;
  interval:any;
  user:any;
  loggedIn:any;
  mobile:boolean;
  constructor(private task:TasksService,private router:Router) { 
    this.loggedIn = task.isAuthed;
    this.mobile = true;
  }

  async ngOnInit(): Promise<void> {
    try{
      this.user = await this.task.isLoggedIn()?.then(token=>token);
      }catch(e){
        this.user = {name:""};
      }
    if(window.screen.width < 800){
      this.mobile = false;
    }
    this.getRandom();
    this.getNew();
    this.startTimer();
    
    console.log(this.user);
  }

  forward(){
    this.current++;
    this.right++;
    this.left++;
    this.left2++;
    this.right2++;
    if(this.current==5)
      this.current=0;
    if(this.right === 5)
      this.right = 0;
    if(this.left === 5)
      this.left = 0;
    if(this.left2 === 5)
      this.left2 = 0;
    if(this.right2 === 5)
      this.right2 = 0;
    
  }

  backwards(){
    this.current--;
    this.left--;
    this.right--;
    this.right2--;
    this.left2--;
    if(this.current==-1)
      this.current=4;
    if(this.left===-1)
      this.left=4;
    if(this.right ==-1)
      this.right=4;
    if(this.right2 ==-1)
      this.right2=4;
    if(this.left2===-1)
      this.left2=4;
  }

  getNew(){
    this.task.getFiveNew().subscribe((results:any)=>{
      for(let x = 0;x<results.length;x++){
        const cur:recipe = {title:results[x].title,id:results[x].id,description:results[x].description,link:"http://localhost:3000/images/"+results[x].id};
        this.new.push(cur);
      }
    });
  }

  getRandom(){
    this.task.getRandomRecipe(5).subscribe(async (res:any)=>{
      for(let x = 0; x<5;x++){
        console.log(res[x].id);
        this.highlights.push({title:res[x].title,id:res[x].id,description:"",link:"http://localhost:3000/images/"+res[x].id});
      }
    });
    
  }

  async getFavorites(){
    this.task.getFavorites().subscribe(async (res: any) => {
      console.log(res);
    });
  }


  nav(id:string){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/recipe/"+id]);
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
  
  startTimer(){
    this.interval = setInterval(()=>{
      if(this.timeLeft>0)
        this.timeLeft--;
      else {
        this.timeLeft = 10;
        this.forward();
      }
    },1000)
  }
}
