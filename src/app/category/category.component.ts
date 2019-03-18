import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HOTELS } from '../hotels';
import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  hotels = HOTELS;

  // filter = { parkplatz: true, spa: true, wlan: true };

  checkValue(event: any) {
    console.log(event);
  }

  testFilter = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  products: any = [];

  onCheck(value){
    if(this.hotels.includes(value) ){
        let index = this.hotels.indexOf(value);
        this.hotels.splice(index,1);
        console.log(this.hotels);    
    }
    else{
      this.hotels.push(value);
      console.log(this.hotels);
    }    
  }

}