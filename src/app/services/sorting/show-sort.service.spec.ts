import { TestBed } from '@angular/core/testing';

import { ShowSortService } from './show-sort.service';

describe('ShowSortService', () => {
  let service: ShowSortService;

  let arr = [{
    score: 1, show: {
      externals: '',
      genres: [''],
      id: 8,
      image: { medium: '', original: '' },
      language: '',
      name: 'c',
      network: { id: 1, name: '', country: '' },
      officialSite: '',
      premiered: '',
      rating: { average: 8 },
      runtime: 5,
      schedule: { time: 7, days: [''] },
      status: '',
      summary: '',
      type: '',
      updated: 1,
      url: '',
      webChannel: '',
      weight: 1
    }
  },
  {
    score: 1, show: {
      externals: '',
      genres: [''],
      id: 8,
      image: { medium: '', original: '' },
      language: '',
      name: 'a',
      network: { id: 1, name: '', country: '' },
      officialSite: '',
      premiered: '',
      rating: { average: 8 },
      runtime: 10,
      schedule: { time: 7, days: [''] },
      status: '',
      summary: '',
      type: '',
      updated: 1,
      url: '',
      webChannel: '',
      weight: 1
    }
  }
  ];
  let sortedArr = [{
    score: 1, show: {
      externals: '',
      genres: [''],
      id: 8,
      image: { medium: '', original: '' },
      language: '',
      name: 'a',
      network: { id: 1, name: '', country: '' },
      officialSite: '',
      premiered: '',
      rating: { average: 8 },
      runtime: 10,
      schedule: { time: 7, days: [''] },
      status: '',
      summary: '',
      type: '',
      updated: 1,
      url: '',
      webChannel: '',
      weight: 1
    }
  },
  {
    score: 1, show: {
      externals: '',
      genres: [''],
      id: 8,
      image: { medium: '', original: '' },
      language: '',
      name: 'c',
      network: { id: 1, name: '', country: '' },
      officialSite: '',
      premiered: '',
      rating: { average: 8 },
      runtime: 5,
      schedule: { time: 7, days: [''] },
      status: '',
      summary: '',
      type: '',
      updated: 1,
      url: '',
      webChannel: '',
      weight: 1
    }
  }
  ];

  // let reversed = sortedArr.reverse();



  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should test sortByValue', () => {

    arr = service.sortByValue(arr, 'runtime');
    expect(arr).toEqual(arr);

  });

  it('should test reverse', () => {

    arr = service.reverse(arr, 'name');
    expect(arr).toEqual(sortedArr);
  }); 


  it('should test sort', () => {

    arr = service.sort(arr, { direction: 'normal', tag: 'name', nested: true })

    expect(arr).toEqual(sortedArr);
  })

  it('should test sort nested  reverse', () => {


    const arrSer = service.sort(arr, { direction: 'reverse', tag: 'name', nested: true })

    expect(arrSer).toEqual(arr); 
  })


});
