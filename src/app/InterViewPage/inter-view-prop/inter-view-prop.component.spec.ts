import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterViewPropComponent } from './inter-view-prop.component';

describe('InterViewPropComponent', () => {
  let component: InterViewPropComponent;
  let fixture: ComponentFixture<InterViewPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterViewPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterViewPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
