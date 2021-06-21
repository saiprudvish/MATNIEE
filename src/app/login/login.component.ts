import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    //inject UserService obj
    constructor(private us:UserService,private router:Router) { }

    ngOnInit(): void {
    }
  
    onLogin(userCredentials){
      this.us.loginUser(userCredentials).subscribe(
        res=>{
          if(res.message==="login success"){
            //save token to localstorage
            localStorage.setItem("token",res.token)
            localStorage.setItem("username",res.username)
            localStorage.setItem("userObj",JSON.stringify(res.userObj))
            //navigate to user profile
            this.router.navigateByUrl(`userprofile/${res.username}`)
          }
          else{
            alert(res.message)
          }
        },
        err=>{
          console.log(err)
          alert("Something went wrong in login")
        }
      )
    }

    // onLogin(ref){
    //   let userLoginObj=ref.value;

     
    //   //if username & pw are admin , then only navigate to admin component
    //    if(userLoginObj.username!='admin@gmail.com'){
    //      alert("Invalid Username")
    //    }
    //    else if(userLoginObj.password!="admin"){
    //     alert("Invalid password")
    //    }
    //    else{
    //      //save username in local storage
    //      localStorage.setItem("username","admin")
    //     //navigate to admin component
    //     this.router.navigateByUrl("/home")
    //    }
    //   }

  }