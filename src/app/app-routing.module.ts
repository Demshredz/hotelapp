import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsComponent } from './hotels/hotels.component';
import { CategoryComponent } from './category/category.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';


const routes: Routes = [
  {path: 'hotels', component: HotelsComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'hoteldetails/:name', component: HotelDetailsComponent},
  {path: '', redirectTo: '/hotels', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
