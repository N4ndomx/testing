import { TestBed } from '@angular/core/testing';

import { MediaProxyService } from './media-proxy.service';

describe('MediaProxyService', () => {
  let service: MediaProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaProxyService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
