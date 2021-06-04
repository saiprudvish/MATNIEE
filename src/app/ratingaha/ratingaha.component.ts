import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-ratingaha',
  templateUrl: './ratingaha.component.html',
  styleUrls: ['./ratingaha.component.css']
})
export class RatingahaComponent implements OnInit {

  ahaObj;
  constructor(private ar:ActivatedRoute,private fs:FirstService) { }


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
}
