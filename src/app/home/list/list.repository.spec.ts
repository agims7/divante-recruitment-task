import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { GlobalMapperService } from '@app/shared/global-mapper.service';
import { ListRepository } from './list.repository';

describe('Repository: ListRepository', () => {
  let globalMapperService: jasmine.SpyObj<GlobalMapperService>;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let repository: ListRepository;

  beforeEach(() => {
    globalMapperService = jasmine.createSpyObj(['mapToStarship']);
    httpClient = jasmine.createSpyObj(['get']);

    TestBed.configureTestingModule({
      providers: [
        ListRepository,
        {
          provide: GlobalMapperService,
          useValue: globalMapperService
        },
        {
          provide: HttpClient,
          useValue: httpClient
        },
      ],
    });

    repository = TestBed.get(ListRepository);
  });

  it('should create ListRepository', () => {
    expect(repository).toBeTruthy();
  });

});
