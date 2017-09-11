import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortCollinsComponent } from './fort-collins.component';

describe('FortCollinsComponent', () => {
  let component: FortCollinsComponent;
  let fixture: ComponentFixture<FortCollinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortCollinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortCollinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
