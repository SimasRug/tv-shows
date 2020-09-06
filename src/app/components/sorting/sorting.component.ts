import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

  @Input() nonFunctioning;
  @Output() sortList = new EventEmitter();
  @Output() filterList = new EventEmitter();
  @Output() selectOption = new EventEmitter();

  sortingItems = [
    { name: 'Name', tag: 'name', nested: true },
    { name: 'Runtime', tag: 'runtime', nested: false },
  ];

  activeSort = { name: '', orientation: '' };
  filterText = '';
  genres = ['', 'Action', 'Adult', 'Adventure', 'Anime', 'Children', 'Comedy', 'Crime', 'DIY', 'Drama',
    'Espionage', 'Family', 'Fantasy', 'Food', 'History', 'Horror', 'Legal', 'Medical', 'Music', 'Mystery',
    'Nature', 'Romance', 'Science-Fiction', 'Sports', 'Supernatural', 'Thriller', 'Travel', 'War', 'Western'];


  arrow = {
    up: 'arrow_upward',
    down: 'arrow_downward'
  };

  constructor() { }

  ngOnInit(): void {
  }


  sortItems(index: number, tag: string, nested: boolean): void {

    if (this.sortingItems[index].name === this.activeSort.name) {

      if (this.activeSort.orientation === this.arrow.up) {
        this.activeSort.orientation = this.arrow.down;
        this.sortList.emit({ direction: 'reverse', tag, nested });
        return;
      }
      this.activeSort.orientation = this.arrow.up;
      this.sortList.emit({ direction: 'normal', tag, nested });
    }

    if (this.sortingItems[index].name !== this.activeSort.name) {
      this.activeSort.orientation = this.arrow.up;
      this.activeSort.name = this.sortingItems[index].name;
      this.sortList.emit({ direction: 'normal', tag, nested });
    }

  }
  filter(val: string): void {
    this.filterList.emit(val);
  }
  option(val: string): void {
    this.selectOption.emit(val);
  }

}
