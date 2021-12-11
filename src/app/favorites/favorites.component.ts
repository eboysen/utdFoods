import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
export interface favorite{
  title:string,
  id:number,
  description:string,
  username:string,
  link:string,
  visible:boolean,
  favorite:boolean,
}
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites:favorite[] = []
  color:string = "Red";
  constructor(private task:TasksService,private router:Router) { }

  async ngOnInit(): Promise<void> {
    //checks to make sure suer is logged in
    try{
      await this.task.isLoggedIn();
    }catch(e){
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/login"]);
      });
    }

    this.getFavorites();
    
  }

  getFavorites(){
    this.task.getFavorites().subscribe((results:any)=>{
      for(let x = 0; x<results.length; x++){
        let current:favorite =  {title:results[x].title,
                                id:results[x].id,
                                username:results[x].username,
                                description:results[x].description,
                                link:"http://localhost:3000/images/"+results[x].id,
                                visible:true,
                                favorite:true,
                              }
        this.favorites.push(current);
      }
    });
  }

  invisible(num:number){
    this.favorites[num].visible=false;
  }

  visible(num:number){
    this.favorites[num].visible=true;
  }
  changeFav(status:boolean,id:number,index:number){
    let idString = ""+id;
    if(status){
      this.task.removeFavorite(idString).subscribe((res)=>{
        console.log(res);
      });
      this.favorites[index].favorite = !status;
    }
    else{
      this.task.setFavorite(idString).subscribe((res)=>{
        console.log(res);
      });
      this.favorites[index].favorite = !status;
    }
  }

  RecipeNav(id:any){
    console.log(id);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/recipe/"+id]);
  }); 
  }

}
