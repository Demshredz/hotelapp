import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hotel } from './hotel';
import { HOTELS } from './hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }
  getHotel(id: number): Observable<Hotel> {
    return of(HOTELS.find(hotel => hotel.id === id));
  }
  // getHotels(): Observable<Hotel[]> {
  //   return of(HOTELS);
  // }
}
