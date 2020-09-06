import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/types/root.type';
import { SocketActions } from 'src/app/actions/socket.actions';
import { ProgramActions } from 'src/app/actions/programs.actions';
import { Ierror } from 'src/app/types/socket.type';
import { ITvProgramInfo, ITvProgram, IProgramCast, IProgramEpisode, ISearchedPrograms } from 'src/app/types/program.type';



@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;

  constructor(private ngRedux: NgRedux<IAppState>, private socketActions: SocketActions, private programActions: ProgramActions) {
    this.socket = io(environment.socketUrl);

    this.socket.on('connect', () => {
      this.ngRedux.dispatch(this.socketActions.connectionSucceeded());
    });

    this.socket.on('disconnect', () => {
      this.ngRedux.dispatch(this.socketActions.connectionLost());
    });

    this.socket.on('data-err', (val: Ierror) => {
     this.ngRedux.dispatch(this.socketActions.apiError(val));
    });


    this.socket.on('tv-schedule', (val: ITvProgramInfo[]) => {

      this.ngRedux.dispatch(this.programActions.programsLoaded(val));
      this.ngRedux.dispatch(this.programActions.sortPrograms(val));

    });

    this.socket.on('shows-found', (val: ISearchedPrograms[]) => {
      this.ngRedux.dispatch(this.programActions.programsFound(val));
      this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(val));
    });

    this.socket.on('cast-found', (val: IProgramCast[]) => {
      this.ngRedux.dispatch(this.programActions.programCastFound(val));
    });

    this.socket.on('episodes-found', (val: IProgramEpisode[]) => {
      this.ngRedux.dispatch(this.programActions.programEpisodesFound(val));

    });
  }



  getSchedule(): void {
    this.socket.emit('get-tv-schedule');
  }
  searchProgram(program: string): void {
    this.socket.emit('search-program', program);
  }
  getSelectedProgramDetails(programId: number): void {
    this.socket.emit('get-cast', programId);
    this.socket.emit('get-episodes', programId);
  }

}

