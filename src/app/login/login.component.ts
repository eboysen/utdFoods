import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { DatabaseService } from '../database.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private tasks:TasksService,private db:DatabaseService,private http:HttpClient, private flash:FlashMessagesService,private router:Router) { }

  ngOnInit(): void {
  }

  async login(username:string,password:string){
    await this.tasks.loginReq(username,password).subscribe(async (res:any)=>{
      this.flash.show(res);
      console.log(res);
      await this.tasks.isLoggedIn();
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(["/user-page"]);
      });
    }
    );
    
    
  }
}
