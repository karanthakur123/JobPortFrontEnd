import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent {
 
  username:"" | undefined
  password:"" | undefined
  
  constructor(private userService:UserServiceService,private router: Router){

  }

  login()
  {
    
      let data= {
        "username":this.username,
        "password":this.password,
      }

      this.userService.loginUser(data).subscribe(
        suc => {
          this.router.navigate(["/userDashBoard"]);
          // console.log(Object.values(suc)[0])
          localStorage.setItem("login","true")
          localStorage.setItem("token",JSON.stringify(Object.values(suc)[0]).substring(1,JSON.stringify(Object.values(suc)[0]).length-1))
          console.log(localStorage.getItem("token"))
        },
        err => {
          alert("User not Login successfully")
          localStorage.setItem("login","false")
        }
    );
   
    
  }


 // https://www.facebook.com/v14.0/dialog/oauth?client_id=402600528637776&redirect_uri=https://theengineerss.com/facebookCode.php&scope=public_profile,email,user_likes,user_birthday,user_gender

 // https://graph.facebook.com/v14.0/oauth/access_token?client_id=402600528637776&client_secret=1ac9c3132beea719be175bf4047e4173&redirect_uri=https://theengineerss.com/facebookCode.php&code=
}
