import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimperAncwerComponent } from './simper-ancwer.component';

describe('SimperAncwerComponent', () => {
  let component: SimperAncwerComponent;
  let fixture: ComponentFixture<SimperAncwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimperAncwerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimperAncwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
