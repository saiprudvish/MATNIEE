import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirstService } from '../first.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  userCartObj;
  products=[];
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let username=localStorage.getItem("username")
    this.userService.getProductsFromUserCart(username).subscribe(
      res=>{

       
        if(res["message"]==='Watchlist-empty'){
          alert("User cart is empty")
        }
        else{
          
            this.userCartObj=res["message"]
            
          
        }
      },
      err=>{
        console.log("err in reading cart",err)
        alert("Something went wrong in fetching cart items..")
      }
    )
  }
 
}