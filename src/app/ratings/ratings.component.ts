import { Component, OnInit } from '@angular/core';
import { RATINGS } from './ratings';
import { Rating } from './rating';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})



export class RatingsComponent implements OnInit {
  
  ratings = RATINGS;
  rating: Rating;
  userRating = new Rating(1, '', '', 1);
  addRatingInput() {
    
  }
  // getId(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   console.log(id);
  // }
  id: number;
  private sub: any
  
  addNewRating() {
    this.userRating = new Rating(1, this.userRating.name, this.userRating.text, 1);
  }
  submitted = false
  onSubmit() { this.submitted = true; }

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

    getHotelRating(): void {
      
    }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

}