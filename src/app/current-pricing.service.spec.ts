import { TestBed } from '@angular/core/testing';

import { CurrentPricingService } from './current-pricing.service';

describe('CurrentPricingService', () => {
  let service: CurrentPricingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentPricingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
