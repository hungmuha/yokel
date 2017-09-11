import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VailComponent } from './vail.component';

describe('VailComponent', () => {
  let component: VailComponent;
  let fixture: ComponentFixture<VailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
