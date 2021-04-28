import { TestBed } from '@angular/core/testing';

import { PasswordRecoveryService } from './password-recovery.service';

describe('PasswordRecoveryService', () => {
  let service: PasswordRecoveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordRecoveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
