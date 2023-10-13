import { TestBed } from '@angular/core/testing';

import { MediaDevService } from './media-dev.service';

describe('MediaService', () => {
  let service: MediaDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaDevService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
