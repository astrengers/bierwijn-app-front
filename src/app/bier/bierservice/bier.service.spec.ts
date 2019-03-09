import {inject, TestBed} from '@angular/core/testing';

import {BierService} from './bier.service';

describe('BierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BierService]
    });
  });

  it('should be created', inject([BierService], (service: BierService) => {
    expect(service).toBeTruthy();
  }));
});
