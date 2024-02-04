import { TestBed } from '@angular/core/testing';

import { ViewdetailedbroadbandService } from './viewdetailedbroadband.service';

describe('ViewdetailedbroadbandService', () => {
  let service: ViewdetailedbroadbandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewdetailedbroadbandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
