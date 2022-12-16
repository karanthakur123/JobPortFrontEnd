import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url="http://localhost:8080"
  constructor(private http: HttpClient) {
   }

  registerUser(data:any)
  {
    return this.http.post(this.url+"/register",data,
    {responseType: 'text'});

  }
  loginUser(data:any)
  {
   
    return this.http.post(this.url+"/authenticate?userType=login",data,
    {responseType: 'json'});

  }
  postLinked(data:any)
  {
    let headers={
      "Authorization": "Bearer "+localStorage.getItem("token")
    }
    console.log(headers)
    return this.http.post(this.url+"/postLinkedIn",data,
    {headers,responseType: 'json'});
  }
  jobPost(data:any)
  {
    let headers={
      "Authorization": "Bearer "+localStorage.getItem("token")
    }
    console.log(headers)
    return this.http.post(this.url+"/jobPost",data,
    {headers,responseType: 'text'});
  }
  postFacebook(data:any)
  {
    let headers={
      "Authorization": "Bearer "+localStorage.getItem("token")
    }
    console.log(headers)
    return this.http.post(this.url+"/postHttpRequest",data,
    {headers,responseType: 'json'});
  }
  getJob(data:any)
  {
    let headers={
      "Authorization": "Bearer "+localStorage.getItem("token")
    }
    return this.http.get(this.url+"/jobDetails/"+data,
    {headers,responseType: 'json'});
  }
}
