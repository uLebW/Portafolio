import { TestBed } from '@angular/core/testing';

import { RutaChecker } from './ruta-checker';

describe('RutaChecker', () => {
  let service: RutaChecker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutaChecker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
