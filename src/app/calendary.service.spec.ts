import { TestBed } from '@angular/core/testing';

import { CalendaryService } from './calendary.service';

describe('CalendaryService', () => {
  let service: CalendaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
