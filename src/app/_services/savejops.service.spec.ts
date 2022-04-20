import { TestBed } from '@angular/core/testing';

import { SavejopsService } from './savejops.service';

describe('SavejopsService', () => {
  let service: SavejopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavejopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
