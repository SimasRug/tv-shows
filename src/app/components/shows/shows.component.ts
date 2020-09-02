import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  @Input() programList;
  @Output() selectedProgram = new EventEmitter;
  @Output() sortPrograms = new EventEmitter;
  @Output() filterPrograms = new EventEmitter;
  @Output() selectedGenre = new EventEmitter;



  constructor() {}

  ngOnInit(): void {
  }

  sortingPrograms(val) {   
    this.sortPrograms.emit(val);
  }
  filterByText(val) { 
    this.filterPrograms.emit(val);
  }
  selectedOption(val) {
    this.selectedGenre.emit(val);
  }
  selectProgram({show}) {
    this.selectedProgram.emit(show);
  }

}
