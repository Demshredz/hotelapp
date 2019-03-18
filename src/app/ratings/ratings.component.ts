import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { RATINGS } from './ratings';
import { Rating } from './rating';
import { FormControl, NgForm, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})



export class RatingsComponent implements OnInit {
  // @ViewChild('f') ratingForm: NgForm; 
  ratings = RATINGS;

  
  submitted = false;
  onSubmit(f: NgForm) {
    console.log(f.value);
    this.submitted = true;
    // f.reset();
  }
  
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

  }

}