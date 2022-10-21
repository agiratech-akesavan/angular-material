import { TestBed } from '@angular/core/testing';

import { ServiceChartService } from './service-chart.service';

describe('ServiceChartService', () => {
  let service: ServiceChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
