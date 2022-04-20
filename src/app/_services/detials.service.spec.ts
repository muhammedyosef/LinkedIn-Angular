import { TestBed } from '@angular/core/testing';

import { DetialsService } from './detials.service';

describe('DetialsService', () => {
  let service: DetialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
