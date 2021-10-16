import { TestBed } from '@angular/core/testing';

import { ProductNoSessionService } from './product-no-session.service';

describe('ProductNoSessionService', () => {
  let service: ProductNoSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductNoSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
