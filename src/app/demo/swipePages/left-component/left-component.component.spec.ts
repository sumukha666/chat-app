import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftComponentComponent } from './left-component.component';

describe('LeftComponentComponent', () => {
  let component: LeftComponentComponent;
  let fixture: ComponentFixture<LeftComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
