import { TestBed } from '@angular/core/testing';

import { ShowSortService } from './show-sort.service';

describe('ShowSortService', () => {
  let service: ShowSortService;

  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should test sortByValue', () => {

    let arr = [{name: 'c'}, {name: 'b'}, {name: 'a'}];
    let sortedArr = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

    arr = service.sortByValue(arr, 'name');
    expect(arr).toEqual(sortedArr);

  });

  it('it should test reverse', () => {
    let arr = [{name: 'a'}, {name: 'b'}, {name: 'c'}];
    let sortedArr = [{name: 'c'}, {name: 'b'}, {name: 'a'}];

    arr = service.reverse(arr, 'name');
    expect(arr).toEqual(sortedArr);
  });


  it('should test sort', () => {

    let arr = [{show:{name: 'c'}}, {show:{name: 'b'}}, {show:{name: 'a'}}];
    let sortedArr = [{show:{name: 'a'}}, {show:{name: 'b'}}, {show:{name: 'c'}}];

    arr = service.sort(arr, {direction:'normal', tag: 'name', nested: true})

    expect(arr).toEqual(sortedArr);
  })

  it('should test sort reverse', () => {

    let arr = [{show:{name: 'a'}}, {show:{name: 'b'}}, {show:{name: 'c'}}];
    let sortedArr = [{show:{name: 'c'}}, {show:{name: 'b'}}, {show:{name: 'a'}}];

    arr = service.sort(arr, {direction:'reverse', tag: 'name', nested: true})

    expect(arr).toEqual(sortedArr); 
  })


});
