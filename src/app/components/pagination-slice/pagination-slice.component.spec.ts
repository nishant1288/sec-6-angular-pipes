import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSliceComponent } from './pagination-slice.component';

describe('PaginationSliceComponent', () => {
  let component: PaginationSliceComponent;
  let fixture: ComponentFixture<PaginationSliceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationSliceComponent]
    });
    fixture = TestBed.createComponent(PaginationSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
