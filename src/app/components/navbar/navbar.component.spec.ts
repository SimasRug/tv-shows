import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { SocketioService } from 'src/app/services/socket-io/socketio.service';
import { SocketActions } from 'src/app/actions/socket.actions';
import { ProgramActions } from 'src/app/actions/programs.actions';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgReduxTestingModule, RouterTestingModule],
      declarations: [ NavbarComponent ],
      providers: [SocketioService, SocketActions, SocketioService, ProgramActions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check if searchForProgram triggers service', () => {
    const service = TestBed.inject(SocketioService);
    const spy = spyOn(service, 'searchProgram');
    component.searchForProgram('test');
    expect(spy).toHaveBeenCalledWith('test');
  });
});
