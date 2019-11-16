import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBookComponent } from './chart-book.component';

describe('ChartBookComponent', () => {
  let component: ChartBookComponent;
  let fixture: ComponentFixture<ChartBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
