import { TestBed } from '@angular/core/testing';

import { BasicStatsService } from './basic-stats.service';

describe('BasicStatsService', () => {
  let service: BasicStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
