import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/types/root.type';
import { ProgramActions } from 'src/app/actions/programs.actions';
import { Router } from '@angular/router';
import { ShowSortService } from 'src/app/services/sorting/show-sort.service';
import { ITvProgram, ITvProgramInfo, ISearchedPrograms } from 'src/app/types/program.type';
import { Observable } from 'rxjs';
import { Isort } from 'src/app/types/sort.types';


@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  @select(['programs', 'searchedProgram']) readonly programs$: Observable<ISearchedPrograms[]>;
  @select(['programs', 'searchedSortedProgram']) readonly filteredPrograms$: Observable<ITvProgramInfo[]>;

  programs: ISearchedPrograms[];

  constructor(private ngRedux: NgRedux<IAppState>, private programActions: ProgramActions,
    private router: Router, private sortService: ShowSortService) {
    this.programs$.subscribe(val => {
      this.programs = [...val];
    });
  }

  ngOnInit(): void {
  }

  selectProgram(program: ITvProgram) {
    this.ngRedux.dispatch(this.programActions.programSelected(program));
    const { name } = program;
    this.router.navigate([`show/${name}`]);
  }

  sortProg(val: Isort) {
    this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(this.sortService.sort(this.programs, val)));
  }

  filterProg(val: string) {

    if (val === '') {
      this.programs$.subscribe(prog => {
        const programsCopy = [...prog];
        this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(programsCopy));
      });
      return;
    }

    const sortedVal = this.sortService.filterName(this.programs, val);
    this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(sortedVal));

  }

  filterByGenre(genre: string) {

    this.programs$.subscribe(prog => {
      const programsCopy = [...prog];
      if (genre === '') {
        this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(programsCopy));
        return;
      }
      const sortedVal = this.sortService.filterGenre(this.programs, genre);
      this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(sortedVal));
    });

  }

  determineType(obj: ITvProgramInfo | ISearchedPrograms): obj is ITvProgramInfo {
    return (<ISearchedPrograms>obj).score !== undefined;
  }
}
