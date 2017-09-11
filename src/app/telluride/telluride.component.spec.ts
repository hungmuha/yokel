import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellurideComponent } from './telluride.component';

describe('TellurideComponent', () => {
  let component: TellurideComponent;
  let fixture: ComponentFixture<TellurideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellurideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellurideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
