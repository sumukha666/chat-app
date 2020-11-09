import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSwipeComponent } from './animation-swipe.component';

describe('AnimationSwipeComponent', () => {
  let component: AnimationSwipeComponent;
  let fixture: ComponentFixture<AnimationSwipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationSwipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
