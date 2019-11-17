import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPdfButtonComponent } from './export-pdf-button.component';

describe('ExportPdfButtonComponent', () => {
  let component: ExportPdfButtonComponent;
  let fixture: ComponentFixture<ExportPdfButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPdfButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPdfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
