import { TestBed } from '@angular/core/testing';

import { ViewdetailedDthplanServiceTsService } from './viewdetailed-dthplan-service.ts.service';

describe('ViewdetailedDthplanServiceTsService', () => {
  let service: ViewdetailedDthplanServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewdetailedDthplanServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
