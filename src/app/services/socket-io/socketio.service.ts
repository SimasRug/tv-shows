import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/types/root.type';
import { SocketActions } from 'src/app/actions/socket.actions';
import { ProgramActions } from 'src/app/actions/programs.actions';



@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;
  foo = false; 

  constructor(private ngRedux: NgRedux<IAppState>, private socketActions: SocketActions, private programActions: ProgramActions) {
    this.socket = io(environment.socketUrl);

    this.socket.on('connect', () => {
      this.ngRedux.dispatch(this.socketActions.connectionSucceeded());
    });

    this.socket.on('disconnect', () => {
      this.ngRedux.dispatch(this.socketActions.connectionLost());
    });

    this.socket.on('data-err', (val) => {
     this.ngRedux.dispatch(this.socketActions.apiError(val));
    });


    this.socket.on('tv-schedule', (val) => {

      this.ngRedux.dispatch(this.programActions.programsLoaded(val));
      this.ngRedux.dispatch(this.programActions.sortPrograms(val));

      // const onlyShows = val.map((({ show }) => show));
      // this.ngRedux.dispatch(this.programActions.showsLoaded(onlyShows))
    });

    this.socket.on('shows-found', (val) => {
      this.ngRedux.dispatch(this.programActions.programsFound(val));
      this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(val));
    });

    this.socket.on('cast-found', (val) => {      
      this.ngRedux.dispatch(this.programActions.programCastFound(val));
    });

    this.socket.on('episodes-found', (val) => {
      this.ngRedux.dispatch(this.programActions.programEpisodesFound(val));

    });
  }



  getSchedule() {
    this.socket.emit('get-tv-schedule');
  }
  searchProgram(program) {
    this.socket.emit('search-program', program);
  }
  getSelectedProgramDetails(programId) {
    this.socket.emit('get-cast', programId);
    this.socket.emit('get-episodes', programId);
  }


}
