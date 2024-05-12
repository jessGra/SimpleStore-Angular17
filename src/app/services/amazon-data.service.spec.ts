import { TestBed } from '@angular/core/testing';

import { AmazonDataService } from './amazon-data.service';

describe('AmazonDataService', () => {
  let service: AmazonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
