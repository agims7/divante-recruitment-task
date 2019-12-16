import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { DetailsRepository } from './details.repository';
import { GlobalMapperService } from '@app/shared/global-mapper.service';
import { environment } from '@env/environment';
import { of, Observable } from 'rxjs';
import { Starship } from '@app/shared/models/starship.model';

describe('Repository: DetailsRepository', () => {
  let globalMapperService: jasmine.SpyObj<GlobalMapperService>;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let repository: DetailsRepository;

  beforeEach(() => {
    globalMapperService = jasmine.createSpyObj(['mapToStarship']);
    httpClient = jasmine.createSpyObj(['get']);

    TestBed.configureTestingModule({
      providers: [
        DetailsRepository,
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

    repository = TestBed.get(DetailsRepository);
  });

  it('should create DetailsRepository', () => {
    expect(repository).toBeTruthy();
  });



  describe('should call get method', () => {
    const expectedStarshipId = '1';
    const expectedUrl = `${environment.url}/starships/${expectedStarshipId}`;
    const starship = new Starship(
      '1',
      123,
      '543',
      1267890,
      555,
      4324,
      'Test model',
      'Test name',
      55
    );

    it('with correct url', () => {
      httpClient.get.and.returnValue(of());

      const actual: Observable<any> = repository.getStarShip(expectedStarshipId);
      actual.subscribe();

      expect(httpClient.get).toHaveBeenCalledWith(expectedUrl);
    });

    it('handle response correctly', () => {
      const expectedResponse: Starship = starship;
      httpClient.get.and.returnValue(of(expectedResponse));

      const actual: Observable<any> = repository.getStarShip(expectedStarshipId);
      actual.subscribe();

      expect(globalMapperService.mapToStarship).toHaveBeenCalledWith(expectedResponse);
    });
  });

});
