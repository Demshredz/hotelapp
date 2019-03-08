import { Component, OnInit } from '@angular/core';
// import { Hotel } from '../hotel';
import { HOTELS } from '../hotels';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  hotels = HOTELS;

  constructor() { }

  ngOnInit() {
  }

}
