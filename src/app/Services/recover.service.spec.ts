import { TestBed } from '@angular/core/testing';

import { RecoverService } from './recover.service';

describe('RecoverService', () => {
  let service: RecoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
