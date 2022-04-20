import { TestBed } from '@angular/core/testing';

import { JopsService } from './jops.service';

describe('JopsService', () => {
  let service: JopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
