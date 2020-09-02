import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { SocketActions } from './actions/socket.actions';
import { ProgramActions } from './actions/programs.actions';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgReduxTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [SocketActions, ProgramActions]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tv-show'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tv-show');
  });
});
