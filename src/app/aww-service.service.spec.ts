import { TestBed } from '@angular/core/testing';

import { AwwServiceService } from './aww-service.service';

describe('AwwServiceService', () => {
  let service: AwwServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwwServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
