import { Component, OnInit } from '@angular/core';

// import { Hotel } from '../hotel';
import { HOTELS } from '../hotels';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

    hotels = HOTELS;
    

    

  constructor(
    private hotelService: HotelService,
  ) { }

  ngOnInit() {
  }
  counter(i: number) {
    return new Array(i);
  }

}
