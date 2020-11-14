import { TestBed } from '@angular/core/testing';

import { ListedeclientService } from './listedeclient.service';

describe('ListedeclientService', () => {
  let service: ListedeclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListedeclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
