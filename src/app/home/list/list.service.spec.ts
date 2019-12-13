import { TestBed } from '@angular/core/testing';

import { ListService } from './list.service';

describe('Service: ListService', () => {
  let service: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListService,
      ],
    });

    service = TestBed.get(ListService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});
