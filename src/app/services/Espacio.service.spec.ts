import { TestBed } from '@angular/core/testing';

import { EspacioService } from './Espacio.service';

describe('EmployeeService', () => {
  let service: EspacioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspacioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
