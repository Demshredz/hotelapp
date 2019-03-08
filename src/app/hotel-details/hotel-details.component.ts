import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HOTELS } from '../hotels'
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  hotels = HOTELS;
  hotel: Hotel;
  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getHotel();
  }
  getHotel(): void {
    const name = +this.route.snapshot.paramMap.get('name');
    this.hotelService.getHotel(name).subscribe(hotel => this.hotel = hotel);
  }
  counter(i: number) {
    return new Array(i);
  }
  goBack(): void {
    this.location.back();
  }
  setradio(e: string): void {
    this.selectedBreakfast = e;
  }
  private selectedBreakfast: string="breakfast";
  isSelected(name: string): boolean {
    if (!this.selectedBreakfast) {
      return false;
    } return (this.selectedBreakfast === name);
  }


}
