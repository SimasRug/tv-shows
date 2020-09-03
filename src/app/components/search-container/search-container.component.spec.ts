import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContainerComponent } from './search-container.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/lib/testing';
import { ProgramActions } from 'src/app/actions/programs.actions';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowSortService } from 'src/app/services/sorting/show-sort.service';

describe('SearchContainerComponent', () => {
  let component: SearchContainerComponent;
  let fixture: ComponentFixture<SearchContainerComponent>;

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
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    component.selectProgram('foo');
    expect(spy).toHaveBeenCalledWith({ type: ProgramActions.PROGRAM_SELECTED, payload: 'foo' });
  });

  it('should test sortProg dispatch', () => {
    const service = TestBed.get(ShowSortService);
    spyOn(service, 'sort').and.callFake(() => 'foo');
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    component.sortProg({direction: 'normal', tag: 'name', nested: true})
    expect(spy).toHaveBeenCalledWith({ type: ProgramActions.PROGRAM_SEARCHED_SORTED, payload: 'foo' });
  });

  it('should test filterProg dispatch with value', () => {
    component.programs = ['foo', 'bar'];
    const service = TestBed.get(ShowSortService);
    spyOn(service, 'filterName').and.callFake(() => 'foo');
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    component.filterProg('foo')
    expect(spy).toHaveBeenCalledWith({ type: ProgramActions.PROGRAM_SEARCHED_SORTED, payload: 'foo' });
  });
});
