import { TestBed } from '@angular/core/testing';

import { OrderEmitterService } from './order-emitter.service';

describe('OrderEmitterService', () => {
  let service: OrderEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
