import { TestBed, async } from '@angular/core/testing';
import { SocketioService } from './socketio.service';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { SocketActions } from 'src/app/actions/socket.actions';
import { ProgramActions } from 'src/app/actions/programs.actions';
// import SocketMock from 'socket.io-mock';




describe('SocketioService', () => {
  let service: SocketioService;


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [NgReduxTestingModule],
      providers: [SocketActions, ProgramActions]
    });
    service = TestBed.inject(SocketioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('bla', async (done) => {

    // let socket = new SocketMock();

    // socket.on('connect', (done) => {
    //   const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');
    //   expect(spy).toHaveBeenCalledWith({ type: SocketActions.CONNECTION_SUCCEEDED });
    //   done();
    // });
    // socket.socketClient.emit('connect');

  

  // });


  // it('should test connection succeeded', function(done) {

  //   let socket = new SocketMock();
  //   const spy = spyOn(MockNgRedux.mockInstance, 'dispatch');


  //   socket.on('connect', () => {
  //     expect(spy).toHaveBeenCalled();
  //     // done();
  //   });

  //   socket.socketClient.emit('connect');


  // });


});
