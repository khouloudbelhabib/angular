import { TestBed } from '@angular/core/testing';

import { RisquesService } from './risques.service';

describe('RisquesService', () => {
  let service: RisquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
