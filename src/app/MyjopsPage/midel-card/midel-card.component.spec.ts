import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidelCardComponent } from './midel-card.component';

describe('MidelCardComponent', () => {
  let component: MidelCardComponent;
  let fixture: ComponentFixture<MidelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
