import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysShowsComponent } from './todays-shows.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/lib/testing';
import { ProgramActions } from 'src/app/actions/programs.actions';
import { RouterTestingModule } from '@angular/router/testing';
import { SocketActions } from 'src/app/actions/socket.actions';

describe('TodaysShowsComponent', () => {
  let component: TodaysShowsComponent;
  let fixture: ComponentFixture<TodaysShowsComponent>;

  const show = {
    externals: '',
    genres: ['Action'],
    id: 1,
    image: { medium: '', original: '' },
    language: '',
    name: '',
    network: { id: 1, name: '', country: '' },
    officialSite: '',
    premiered: '',
    rating: { average: 6 },
    runtime: 1,
    schedule: { time: 6, days: [''] },
    status: '',
    summary: '',
    type: '',
    updated: 1,
    url: '',
    webChannel: '',
    weight: 1,
  }
  const todayShow = {
    airdate: '',
    airstamp: '',
    airtime: '',
    id: 1,
    image: '',
    name: '',
    number: 1,
    runtime: 1,
    season: 1,
    show: show,
    summary: '',
    url: '',
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodaysShowsComponent],
      imports: [NgReduxTestingModule, RouterTestingModule],
      providers: [ProgramActions, SocketActions]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit on sortItems', () => {

    const sortPar = { direction: 'normal', tag: 'show', nested: false }
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    component.programs = [todayShow, todayShow];
    component.sort(sortPar);
    expect(spy).toHaveBeenCalledWith({ type: ProgramActions.PROGRAM_SORTED, payload: [todayShow, todayShow] });

  });

  it('should test filter', () => {
    const sortPar = 'empty';
    component.programs = [todayShow];
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    component.filter(sortPar);
    expect(spy).toHaveBeenCalledWith({ type: ProgramActions.PROGRAM_SORTED, payload: [] });

  });

  it('should test filterByGenre', () => {
    // const sortPar = 'Action';
    component.programs = [todayShow];
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    component.filterByGenre('Action');
    expect(spy).toHaveBeenCalledWith({ type: ProgramActions.PROGRAM_SORTED, payload: [todayShow] });

  });

  it('should test select program', () => {
    const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    component.selectProgram(show);
    expect(spy).toHaveBeenCalledWith({ type: ProgramActions.PROGRAM_SELECTED, payload: show });

  });

});
