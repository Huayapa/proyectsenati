import { TestBed } from '@angular/core/testing';

import { BdusersService } from './bdusers.service';

describe('BdusersService', () => {
  let service: BdusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
