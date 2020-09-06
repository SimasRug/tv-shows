import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchProgram = new EventEmitter<string>();

  searchShow = '';

  constructor() { }

  ngOnInit(): void {
  }


  findProgram(program: string): void {
    this.searchProgram.emit(program);
  }

}
