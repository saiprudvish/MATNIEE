import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-ratingprime',
  templateUrl: './ratingprime.component.html',
  styleUrls: ['./ratingprime.component.css']
})
export class RatingprimeComponent implements OnInit {

  primeObj;
  constructor(private ar:ActivatedRoute,private fs:FirstService) { }

  ngOnInit(): void {
      //get id from url
      let id=this.ar.snapshot.params.id;
    
      //get data of movie with this current id
      this.fs.getPrimeMovieRatingById(id).subscribe(
        obj=>{
    
          this.primeObj=obj;
        },
        err=>{
          console.log("err in reading movie",err)
        }
      )
  }
}
