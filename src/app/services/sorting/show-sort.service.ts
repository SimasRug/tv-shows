import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowSortService {

  constructor() { }


 nestedSortByValue(obj, val) {
    return obj.sort((a, b) =>  (a.show[val] > b.show[val]) ? 1 : -1)
 }

 sortByValue(obj, val) {
  return obj.sort((a, b) =>  (a[val] > b[val]) ? 1 : -1)
}

 reverse(obj, val) {
    return  this.sortByValue(obj, val).reverse()
  }

  nestedReverse(obj, val) {
    return  this.nestedSortByValue(obj, val).reverse()
  }

  sort(obj, val: {direction: string, tag: string, nested: boolean}) {

    if(val.direction === 'normal') {
      return val.nested ? this.nestedSortByValue(obj, val.tag) :  this.sortByValue(obj, val.tag);
    
    }
    if(val.direction === 'reverse') {
      return val.nested ? this.nestedReverse(obj, val.tag) :  this.reverse(obj, val.tag);
    }

  }

  filterName(obj, val) {
    return obj.filter(({show: {name}}) => name.toLowerCase().includes(val.toLowerCase()));

  }

  filterGenre(obj, val) {
    return obj.filter(({show: {genres}}) => genres.includes(val));
  }



}
