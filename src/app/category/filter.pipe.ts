import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, filterString: string, propName: string): any {
  //   // if (value.length === 0) {
  //   //   return value;
  //   // }
  //   const resultArray = [];
  //   for (const item of value) {
  //     if (item[propName] === filterString) {
  //       resultArray.push(item);
  //     }
  //     // else {
  //     //   resultArray.push(item);
  //     // }
  //   }
  //   return resultArray;
  // }
  

  transform(value: any, filterString: any): any {
    if ( filterString === undefined) return value;
    return value.filter(function(x) {
      return x.name.toLowerCase().includes(filterString);
    });
  }
  

}
