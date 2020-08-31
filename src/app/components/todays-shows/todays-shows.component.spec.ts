import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysShowsComponent } from './todays-shows.component';

describe('TodaysShowsComponent', () => {
  let component: TodaysShowsComponent;
  let fixture: ComponentFixture<TodaysShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysShowsComponent ]
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
