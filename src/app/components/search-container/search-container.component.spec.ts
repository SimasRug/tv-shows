import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContainerComponent } from './search-container.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/lib/testing';
import { ProgramActions } from 'src/app/actions/programs.actions';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowSortService } from 'src/app/services/sorting/show-sort.service';

describe('SearchContainerComponent', () => {
  let component: SearchContainerComponent;
  let fixture: ComponentFixture<SearchContainerComponent>;
  const tvProg = {
    externals: '',
    genres: [''],
    id: 1,
    image: { medium: '', original: '' },
    language: '',
    name: '',
    network: { id: 1, name: '', country: '' },
    officialSite: '',
    premiered: '',
    rating: { average: 1 },
    runtime: 1500,
    schedule: { time: 1, days: [''] },
    status: '',
    summary: '',
    type: '',
    updated: 43,
    url: '',
    webChannel: '',
    weight: 5,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchContainerComponent],
      imports: [NgReduxTestingModule, RouterTestingModule],
      providers: [SearchContainerComponent, ProgramActions, ShowSortService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test selectProgram dispatch', () => {
    const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
    component.selectProgram(tvProg);
    expect(spy).toHaveBeenCalledWith({ type: ProgramActions.PROGRAM_SELECTED, payload: tvProg });
  });

  it('should test sortProg dispatch', () => {
    const service = TestBed.inject(ShowSortService);
    spyOn(service, 'sort').and.callFake(() => 'foo');
    const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
    component.sortProg({ direction: 'normal', tag: 'name', nested: true });
    expect(spy).toHaveBeenCalledWith({ type: ProgramActions.PROGRAM_SEARCHED_SORTED, payload: 'foo' });
  });

  it('should test filterProg dispatch with value', () => {
    const service = TestBed.inject(ShowSortService);
    spyOn(service, 'filterName').and.callFake(() => 'foo');
    const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
    component.filterProg('foo');
    expect(spy).toHaveBeenCalledWith({ type: ProgramActions.PROGRAM_SEARCHED_SORTED, payload: 'foo' });
  });
});
