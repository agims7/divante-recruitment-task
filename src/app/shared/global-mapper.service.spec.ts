import { TestBed } from '@angular/core/testing';

import { GlobalMapperService } from './global-mapper.service';

describe('Service: GlobalMapperService', () => {
  let service: GlobalMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GlobalMapperService,
      ],
    });

    service = TestBed.get(GlobalMapperService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});
