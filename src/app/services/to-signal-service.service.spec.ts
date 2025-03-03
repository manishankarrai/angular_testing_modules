import { TestBed } from '@angular/core/testing';

import { ToSignalServiceService } from './to-signal-service.service';

describe('ToSignalServiceService', () => {
  let service: ToSignalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToSignalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
