import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaverCreekComponent } from './beaver-creek.component';

describe('BeaverCreekComponent', () => {
  let component: BeaverCreekComponent;
  let fixture: ComponentFixture<BeaverCreekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaverCreekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaverCreekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
