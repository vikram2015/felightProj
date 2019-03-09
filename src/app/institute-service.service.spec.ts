import { TestBed, inject } from '@angular/core/testing';

import { InstituteServiceService } from './institute-service.service';

describe('InstituteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstituteServiceService]
    });
  });

  it('should be created', inject([InstituteServiceService], (service: InstituteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
