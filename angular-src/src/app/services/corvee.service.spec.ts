import { TestBed } from '@angular/core/testing';

import { CorveeService } from './corvee.service';

describe('CorveeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorveeService = TestBed.get(CorveeService);
    expect(service).toBeTruthy();
  });
});
