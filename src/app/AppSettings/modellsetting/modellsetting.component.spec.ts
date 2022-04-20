import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModellsettingComponent } from './modellsetting.component';

describe('ModellsettingComponent', () => {
  let component: ModellsettingComponent;
  let fixture: ComponentFixture<ModellsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModellsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModellsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
