import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysShowsComponent } from './todays-shows.component';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { ProgramActions } from 'src/app/actions/programs.actions';
import { RouterTestingModule } from '@angular/router/testing';
import { SocketActions } from 'src/app/actions/socket.actions';

describe('TodaysShowsComponent', () => {
  let component: TodaysShowsComponent;
  let fixture: ComponentFixture<TodaysShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysShowsComponent ],
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
});
