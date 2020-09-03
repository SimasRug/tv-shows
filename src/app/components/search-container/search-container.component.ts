import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/types/root.type';
import { ProgramActions } from 'src/app/actions/programs.actions';
import { Router } from '@angular/router';
import { ShowSortService } from 'src/app/services/sorting/show-sort.service';


@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  @select(['programs', 'searchedProgram']) readonly programs$;
  @select(['programs', 'searchedSortedProgram']) readonly filteredPrograms$;

  programs;

  constructor(private ngRedux: NgRedux<IAppState>, private programActions: ProgramActions, private router: Router, private sortService: ShowSortService) {
    this.programs$.subscribe(val => {
      this.programs = [...val];
    })
  }

  ngOnInit(): void {
  }

  selectProgram(program) {
    this.ngRedux.dispatch(this.programActions.programSelected(program));
    const { name } = program;
    this.router.navigate([`show/${name}`]);
  }

  sortProg(val) {
    this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(this.sortService.sort(this.programs, val)));
  }

  filterProg(val: string) {

    if (val === '') {
      this.programs$.subscribe(val => {
        const programsCopy = [...val];
        this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(programsCopy));
      });
      return;
    }

    this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(this.sortService.filterName(this.programs, val)));
  }

  filterByGenre(genre: string) {

    this.programs$.subscribe(val => {
      const programsCopy = [...val];
      if (genre === '') {
        this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(programsCopy));
        return;
      }
      this.ngRedux.dispatch(this.programActions.sortSearchedPrograms(this.sortService.filterGenre(this.programs, genre)));
    });

  }
}
