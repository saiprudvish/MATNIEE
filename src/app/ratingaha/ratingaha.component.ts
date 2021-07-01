import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ratingaha',
  templateUrl: './ratingaha.component.html',
  styleUrls: ['./ratingaha.component.css']
})
export class RatingahaComponent implements OnInit {

  ahaObj;
  constructor(private ar:ActivatedRoute,private fs:FirstService,private userService:UserService) { }


  ngOnInit(): void {
      //get id from url
      let id=this.ar.snapshot.params.id;
    
      //get data of movie with this current id
      this.fs.getAhaMovieRatingById(id).subscribe(
        obj=>{
    
          this.ahaObj=obj;
        },
        err=>{
          console.log("err in reading movie",err)
        }
      )
  }

   //movie selected by user to add in watchlist
   onProductSelect(productObject){
    // console.log(productObject)
    let username=localStorage.getItem("username")

    let newUserProductObj={username,productObject}
    //  console.log(newUserProductObj)
     //product selected by user
  
   this.userService.sendProductToUserCart(newUserProductObj).subscribe(
     res=>{
      alert(res['message'])

     },
     err=>{
       console.log("err in posting product to cart ",err)
       alert("Something wrong in adding product to cart...")
     }
   )
}
}