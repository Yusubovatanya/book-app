import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangesFooterComponent } from './ranges-footer.component';

describe('RangesFooterComponent', () => {
  let component: RangesFooterComponent;
  let fixture: ComponentFixture<RangesFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangesFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
