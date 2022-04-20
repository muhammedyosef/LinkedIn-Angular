import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddelCardComponent } from './middel-card.component';

describe('MiddelCardComponent', () => {
  let component: MiddelCardComponent;
  let fixture: ComponentFixture<MiddelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
