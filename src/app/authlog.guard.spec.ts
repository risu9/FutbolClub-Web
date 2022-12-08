import { TestBed } from '@angular/core/testing';

import { AuthlogGuard } from './authlog.guard';

describe('AuthlogGuard', () => {
  let guard: AuthlogGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthlogGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
