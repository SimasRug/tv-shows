import { Injectable } from '@angular/core';
import { ITvProgramInfo, ITvProgram, ISearchedPrograms } from 'src/app/types/program.type';
import { Isort } from 'src/app/types/sort.types';

@Injectable({
  providedIn: 'root'
})
export class ShowSortService {

  constructor() { }


  nestedSortByValue(obj, val: string) {
    return obj.sort((a, b) => (a.show[val] > b.show[val]) ? 1 : -1)
  }

  sortByValue(obj, val: string) {
    return obj.sort((a, b) => (a[val] > b[val]) ? 1 : -1)
  }

  reverse(obj: ITvProgramInfo[] | ISearchedPrograms[], val: string) {
    return this.sortByValue(obj, val).reverse()
  }

  nestedReverse(obj: ITvProgramInfo[] | ISearchedPrograms[], val: string) {
    return this.nestedSortByValue(obj, val).reverse()
  }

  sort(obj: ITvProgramInfo[] | ISearchedPrograms[], val: Isort) {

    if (val.direction === 'normal') {
      return val.nested ? this.nestedSortByValue(obj, val.tag) : this.sortByValue(obj, val.tag);

    }
    if (val.direction === 'reverse') {
      return val.nested ? this.nestedReverse(obj, val.tag) : this.reverse(obj, val.tag);
    }

  }

  filterName(obj: ITvProgramInfo[] | ISearchedPrograms[], val: string): any  {
    return (obj as Array<ITvProgramInfo | ISearchedPrograms>).filter(({ show: { name } }) => name.toLowerCase().includes(val.toLowerCase()));

  }

  filterGenre(obj: ITvProgramInfo[] | ISearchedPrograms[], val: string): any {
    return (obj as Array<ITvProgramInfo | ISearchedPrograms>).filter(({ show: { genres } }) => genres.includes(val));
  }

}
