import { TestBed, inject } from '@angular/core/testing';

import { ClimbingRoutesService } from './climbing-routes.service';

describe('ClimbingRoutesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClimbingRoutesService]
    });
  });

  it('should be created', inject([ClimbingRoutesService], (service: ClimbingRoutesService) => {
    expect(service).toBeTruthy();
  }));
});
