import { TestBed } from '@angular/core/testing';

import { RisquesServiceService } from './risques-service.service';

describe('RisquesServiceService', () => {
  let service: RisquesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisquesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
