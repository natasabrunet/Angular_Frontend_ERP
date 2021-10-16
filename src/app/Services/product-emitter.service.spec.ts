import { TestBed } from '@angular/core/testing';

import { ProductEmitterService } from './product-emitter.service';

describe('ProductEmitterService', () => {
  let service: ProductEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
