import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-ratingnetflix',
  templateUrl: './ratingnetflix.component.html',
  styleUrls: ['./ratingnetflix.component.css']
})
export class RatingnetflixComponent implements OnInit {

  NetflixObj;
  constructor(private ar:ActivatedRoute,private fs:FirstService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;
    
    //get data of movie with this current id
    this.fs.getNetflixMovieRatingById(id).subscribe(
      obj=>{
  
        this.NetflixObj=obj;
      },
      err=>{
        console.log("err in reading movie",err)
      }
    )
}
}
