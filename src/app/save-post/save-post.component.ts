import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-save-post',
  templateUrl: './save-post.component.html',
  styleUrls: ['./save-post.component.css']
})
export class SavePostComponent implements OnInit  {
  
  userData:any=[]
  constructor(private userService:UserServiceService,private router: Router){

  }
  ngOnInit() {
    this.userService.getJob("username").subscribe(
      (res =>
        {
          // console.log(res)
          this.userData=res
          this.userData.forEach((element:any) => {
            console.log(element)
          });

        }
        
        
        )

    );
     
  }


}
