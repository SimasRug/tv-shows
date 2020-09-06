import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingComponent } from './sorting.component';

describe('SortingComponent', () => {
  let component: SortingComponent;
  let fixture: ComponentFixture<SortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit on filter', () => {
    spyOn(component.filterList, 'emit');
    component.filter('test');
    expect(component.filterList.emit).toHaveBeenCalledWith('test');
  });
  it('should emit on option', () => {
    spyOn(component.selectOption, 'emit');
    component.option('test');
    expect(component.selectOption.emit).toHaveBeenCalledWith('test');
  });
  it('should emit on sortItems', () => {
    spyOn(component.sortList, 'emit');
    component.sortItems(1, 'show', false);
    expect(component.sortList.emit).toHaveBeenCalledWith({ direction: 'normal', tag: 'show', nested: false });
  });
});
