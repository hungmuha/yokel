import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLocationComponent } from './comment-location.component';

describe('CommentLocationComponent', () => {
  let component: CommentLocationComponent;
  let fixture: ComponentFixture<CommentLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
