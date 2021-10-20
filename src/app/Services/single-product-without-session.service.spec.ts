import { TestBed } from '@angular/core/testing';

import { SingleProductWithoutSessionService } from './single-product-without-session.service';

describe('SingleProductWithoutSessionService', () => {
  let service: SingleProductWithoutSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleProductWithoutSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
