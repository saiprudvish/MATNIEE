import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-movierating',
  templateUrl: './movierating.component.html',
  styleUrls: ['./movierating.component.css']
})
export class MovieratingComponent implements OnInit {

  MovieObj;
  constructor(private ar:ActivatedRoute,private fs:FirstService,private userService:UserService) { }
    
    //create a custom event


  ngOnInit(): void {
      //get id from url
      let id=this.ar.snapshot.params.id;
    
      //get data of movie with this current id
      this.fs.getMovieRatingById(id).subscribe(
        obj=>{
    
          this.MovieObj=obj;
          console.log("obj is ",this.MovieObj)
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
