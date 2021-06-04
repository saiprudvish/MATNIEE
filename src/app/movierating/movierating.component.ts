import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-movierating',
  templateUrl: './movierating.component.html',
  styleUrls: ['./movierating.component.css']
})
export class MovieratingComponent implements OnInit {

  MovieObj;
  constructor(private ar:ActivatedRoute,private fs:FirstService) { }
    
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
}
