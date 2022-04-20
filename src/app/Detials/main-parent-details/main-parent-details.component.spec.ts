import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainParentDetailsComponent } from './main-parent-details.component';

describe('MainParentDetailsComponent', () => {
  let component: MainParentDetailsComponent;
  let fixture: ComponentFixture<MainParentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainParentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainParentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
