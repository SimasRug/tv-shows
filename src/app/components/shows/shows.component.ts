import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Isort } from '../../types/sort.types';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  @Input() programList;
  @Output() selectedProgram = new EventEmitter();
  @Output() sortPrograms = new EventEmitter();
  @Output() filterPrograms = new EventEmitter();
  @Output() selectedGenre = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  sortingPrograms(val: Isort): void {
    this.sortPrograms.emit(val);
  }
  filterByText(val: string): void {
    this.filterPrograms.emit(val);
  }
  selectedOption(val: string): void {
    this.selectedGenre.emit(val);
  }
  selectProgram({ show }): void {
    this.selectedProgram.emit(show);
  }

}
