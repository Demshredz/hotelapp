import { Component, OnInit } from '@angular/core';
// import { Hotel } from '../hotel';
import { HOTELS } from '../hotels';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

    hotels = HOTELS;

    counter(i: number) {
      return new Array(i);
    }

  constructor() { }

  ngOnInit() {
  }

}
