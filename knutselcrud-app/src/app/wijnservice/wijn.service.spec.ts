import {inject, TestBed} from '@angular/core/testing';

import {WijnService} from './wijn.service';

describe('WijnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WijnService]
    });
  });

  it('should be created', inject([WijnService], (service: WijnService) => {
    expect(service).toBeTruthy();
  }));
});
