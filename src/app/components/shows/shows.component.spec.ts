import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsComponent } from './shows.component';

describe('ShowsComponent', () => {
  let component: ShowsComponent;
  let fixture: ComponentFixture<ShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit on sortingPrograms', () => {
    spyOn(component.sortPrograms, 'emit');
    component.sortingPrograms({direction: 'normal', tag: 'show', nested: false});
    expect(component.sortPrograms.emit).toHaveBeenCalledWith({direction: 'normal', tag: 'show', nested: false});
  });
  it('should emit on filterByText', () => {
    spyOn(component.filterPrograms, 'emit');
    component.filterByText('test');
    expect(component.filterPrograms.emit).toHaveBeenCalledWith('test');
  });
  it('should emit on selectedOption', () => {
    spyOn(component.selectedGenre, 'emit');
    component.selectedOption('test');
    expect(component.selectedGenre.emit).toHaveBeenCalledWith('test');
  });
  it('should emit on selectProgram', () => {
    spyOn(component.selectedProgram, 'emit');
    component.selectProgram({show: 'test'});
    expect(component.selectedProgram.emit).toHaveBeenCalledWith('test');
  });
});
