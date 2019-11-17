import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportExcelButtonComponent } from './export-excel-button.component';

describe('ExportExcelButtonComponent', () => {
  let component: ExportExcelButtonComponent;
  let fixture: ComponentFixture<ExportExcelButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportExcelButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportExcelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
