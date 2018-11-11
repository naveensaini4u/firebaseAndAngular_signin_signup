import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../firebase-service.service';
import { Router } from '@angular/router';
var self;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public show=true;
  public user_email: string
  private password: string;
  constructor(private router: Router, public fs : FirebaseServiceService) {  
    self = this;
   }
  SignUP(){
    this.show = false;
  }
  SignIn(){
    this.show = true;
  }
  register(){
    let data = {email:self.user_email,password:self.password};
    console.log("data=>",data)
    this.fs.registerUser(data)
    .subscribe(res => {
        if(res.data){
          alert("user register successfully");
          this.show = true;
          this.user_email = '';
          this.password = '';
        } else{
          alert("Something went wrong. Please try again later");
          this.user_email = '';
          this.password = '';
        }
      }, (err) => {
        console.log(err);
      });
  }
  logIn(){
    let data = {email:self.user_email,password:self.password};
    console.log("data=>",data)
    this.fs.getUser(data)
    .subscribe(res => {
      if(res.data.login){
        this.user_email = '';
          this.password = '';
        this.router.navigate(['/dashbord']);
      } else {
        if(res.data.msg=='fail'){
          alert("Please enter a valid password.");
          this.password = '';
        } else if(res.data.msg=='invalid'){
          alert("not a valid user.");
          this.password = '';
        }
      }
        
      }, (err) => {
        console.log(err);
      });
  }
  
  ngOnInit() {
  }

}
