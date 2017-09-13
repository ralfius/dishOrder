import { TestBed } from '@angular/core/testing';

import { DatepickerComponent } from './datepicker.component';

describe('datepicker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [DatepickerComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(DatepickerComponent);
    expect(fixture.componentInstance instanceof DatepickerComponent).toBe(true, 'should create DatepickerComponent');
  });
});
