import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageComponentComponent } from './about-page-component.component';

describe('AboutPageComponentComponent', () => {
  let component: AboutPageComponentComponent;
  let fixture: ComponentFixture<AboutPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
