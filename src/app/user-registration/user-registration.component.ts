import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  
  email:"" | undefined
  name:"" | undefined
  mobile:"" | undefined
  username:"" | undefined
  password:"" | undefined
  conPassword:"" | undefined

  constructor(private userService:UserServiceService){

  }

  register()
  {
    if(this.password==this.conPassword)
    {
      let data= {
        "username":this.username,
        "password":this.password,
        "email":this.email,
        "mobile":this.mobile
      }

      this.userService.registerUser(data).subscribe(
        suc => {
          alert("User Registered successfully")
        },
        err => {
          alert("User not Registered successfully")
        }
    );
    }
    else{
      alert("Password does not")
    }
   
   console.log(this.email)
    
  }
}
