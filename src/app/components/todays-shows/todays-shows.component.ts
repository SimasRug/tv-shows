import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/types/root.type';
import { ProgramActions } from 'src/app/actions/programs.actions';
import { Router } from '@angular/router';
import { ShowSortService } from 'src/app/services/sorting/show-sort.service';
import { SocketioService } from 'src/app/services/socket-io/socketio.service';
import { Observable } from 'rxjs';
import { ITvProgramInfo, ITvProgram } from 'src/app/types/program.type';
import { Isort } from 'src/app/types/sort.types';



@Component({
  selector: 'app-todays-shows',
  templateUrl: './todays-shows.component.html',
  styleUrls: ['./todays-shows.component.scss']
})
export class TodaysShowsComponent implements OnInit {


  @select(['programs', 'sortedPrograms']) readonly todaysPrograms$: Observable<ITvProgramInfo[]>;
  @select(['programs', 'programsInfo']) readonly todaysProgramsOrg$: Observable<ITvProgramInfo[]>;

  programs: ITvProgramInfo[];


  constructor(
    private ngRedux: NgRedux<IAppState>,
    private programActions: ProgramActions,
    private router: Router,
    private sortService: ShowSortService,
    private socketService: SocketioService) {

    this.todaysPrograms$.subscribe(val => {
      this.programs = [...val];
    });
  }

  ngOnInit(): void {
  }

  selectProgram(program: ITvProgram): void {
    this.ngRedux.dispatch(this.programActions.programSelected(program));
    this.socketService.getSelectedProgramDetails(program.id);
    const { name } = program;
    this.router.navigate([`show/${name}`]);
  }

  sort(val: Isort): void {
    this.ngRedux.dispatch(this.programActions.sortPrograms(this.sortService.sort(this.programs, val)));
  }

  filter(val: string): void {

    if (val === '') {
      this.todaysProgramsOrg$.subscribe(program => {
        const programsCopy = [...program];
        this.ngRedux.dispatch(this.programActions.sortPrograms(programsCopy));
      });
      return;
    }

    this.ngRedux.dispatch(this.programActions.sortPrograms(this.sortService.filterName(this.programs, val)));
  }

  filterByGenre(genre: string): void {

    if (genre === '') {
      this.todaysProgramsOrg$.subscribe(val => {
        const programsCopy = [...val];
        this.ngRedux.dispatch(this.programActions.sortPrograms(programsCopy));
      });
      return;
    }

    this.ngRedux.dispatch(this.programActions.sortPrograms(this.sortService.filterGenre(this.programs, genre)));

  }
}
