import { TestBed } from '@angular/core/testing';

import { LinearRegressionTest1Service } from './linear-regression-test1.service';

describe('LinearRegressionService', () => {
  let service: LinearRegressionTest1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinearRegressionTest1Service);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
