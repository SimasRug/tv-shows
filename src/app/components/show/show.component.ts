import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { Router, Route } from '@angular/router';
import { ITvProgram } from 'src/app/types/program.type';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  @select(['programs', 'selectedProgram']) readonly program$: Observable<ITvProgram>;

  program: ITvProgram

  constructor(private router: Router) {
    this.program$.subscribe(val => {
      this.program = val;
    })
  }

  ngOnInit(): void {

    // TODO fix this solution
    this.program$.subscribe((val) => {
      if(val === undefined || decodeURI(this.router.url) !== `/show/${val.name}` ){
        this.router.navigate(['']);
      }
    });
  }

}
