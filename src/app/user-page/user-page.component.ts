import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user:any;
  link:string="";
  constructor(private router:Router, private task:TasksService) { }

  async ngOnInit(): Promise<void> {
    try{
      this.user = await this.task.isLoggedIn()?.then(token=>token);
      this.link = "http://localhost:3000/images/"+this.user.username;
      }catch(e){
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(["/login"]);
          });
      }
  }
  newRecipeLink(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/new-recipe"]);
  }); 
  }



}
