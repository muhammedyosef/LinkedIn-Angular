import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjopsComponent } from './myjops.component';

describe('MyjopsComponent', () => {
  let component: MyjopsComponent;
  let fixture: ComponentFixture<MyjopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyjopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
