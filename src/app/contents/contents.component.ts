import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { recipe } from 'src/recipe';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  recipes:recipe[]=[];
  user:any;

  constructor(private task:TasksService, private route:ActivatedRoute, private router:Router) { }

  async ngOnInit(): Promise<void> {
    try{
      this.user = await this.task.isLoggedIn()?.then(token=>token);
      }catch(e){
        this.user = {name:""};
      }
    if(this.route.queryParams != undefined){  
      this.route.queryParams.subscribe(params=>{
        this.task.getSearch(params.keyword).subscribe((response:any)=>{
          for(let x =0;x<response.length;x++){
            const current:recipe = {title:response[x].title,id:response[x].id,description:response[x].description,link:"http://localhost:3000/images/"+response[x].id}
            this.recipes.push(current);
          }
          console.log(this.recipes);
        })
      });
    }
    else{
      this.task.getContents().subscribe((response:any)=>{
        for(let x =0;x<response.length;x++){
          const current:recipe = {title:response[x].title,id:response[x].id,description:response[x].description,link:"http://localhost:3000/images/"+response[x].id}
          this.recipes.push(current);
        }
      });
    }
    
  }

  links(id:string){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/recipe/"+id]);
    });
  }


}
