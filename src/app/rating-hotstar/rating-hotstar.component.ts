import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-rating-hotstar',
  templateUrl: './rating-hotstar.component.html',
  styleUrls: ['./rating-hotstar.component.css']
})
export class RatingHotstarComponent implements OnInit {

  HotstarObj;
  constructor(private ar:ActivatedRoute,private fs:FirstService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of movie with this current id
    this.fs.getHotstarMovieRatingById(id).subscribe(
      obj=>{
  
        this.HotstarObj=obj;
      },
      err=>{
        console.log("err in reading movie",err)
      }
    )
  }
}
