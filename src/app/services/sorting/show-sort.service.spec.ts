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
});
