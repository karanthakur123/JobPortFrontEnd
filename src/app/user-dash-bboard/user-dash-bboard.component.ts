import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-dash-bboard',
  templateUrl: './user-dash-bboard.component.html',
  styleUrls: ['./user-dash-bboard.component.css']
})
export class UserDashBboardComponent {

  jobPostName:"" | undefined
  jobSpecification:"" | undefined
  jobDescription:"" | undefined
  jobWebsite:"" | undefined
  specification =["Web Designer","Graphic Designer","Web Developer","UI/UX"] 

  constructor(private userService:UserServiceService,private router: Router){

  }
  open = false;

  close() {
    this.open = false;
  }
jobPost()
{
 
  if(this.jobWebsite?.includes("LinkedIn"))
  {
    let data= {
      "author": "urn:li:person:qRGW0r1YdC",
      "lifecycleState": "PUBLISHED",
      "specificContent": {
          "com.linkedin.ugc.ShareContent": {
              "shareCommentary": {
                  "text": "Hello World! This is my first Share on LinkedIn!CUCVUYCVUETcufcuwtf"
              },
              "shareMediaCategory": "NONE"
          }
      },
      "visibility": {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
      }
  }
  
    this.userService.postLinked(data).subscribe(
      suc => {
        let data={
          "jobSpecification":this.jobSpecification,
          "jobDescription":this.jobDescription,
          "jobTitle":this.jobPostName,
            "jobWebsite":this.jobWebsite,
          "createdOn":new Date(),
          "username":"username",
          "hireStatus":"Not hired"
        }
        this.userService.jobPost(data).subscribe(
          suc => {
            console.log("jobsaved");
          },
          err => {
            alert(err)
            console.log(err)
            localStorage.setItem("login","false")
          }
      );
        alert("Job Post Successfully")
      },
      err => {
        alert(err)
        localStorage.setItem("login","false")
      }
  );
  
  }
  if(this.jobWebsite?.includes("Facebook"))
  {
    let data= {
 
      "message":"Finalchange"
  }
    this.userService.postFacebook(data).subscribe(
      suc => {
        alert("Job Post Successfully")
      },
      err => {
        alert("Job Not Post Successfully")
        localStorage.setItem("login","false")
      }
    );
  }
  
}

logout()
{
  console.log("coming")
  localStorage.removeItem("login");
  this.router.navigate([""]);
}

}
