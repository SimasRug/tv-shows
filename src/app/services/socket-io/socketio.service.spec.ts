import { TestBed } from '@angular/core/testing';
import { SocketioService } from './socketio.service';
import { NgReduxTestingModule} from '@angular-redux/store/testing';
import { SocketActions } from 'src/app/actions/socket.actions';
import { ProgramActions } from 'src/app/actions/programs.actions';


describe('SocketioService', () => {
  let service: SocketioService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports:[NgReduxTestingModule],
      providers:[SocketActions, ProgramActions]
    });
    service = TestBed.inject(SocketioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
