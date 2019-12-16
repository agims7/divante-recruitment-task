import { TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';

import { ListRepository } from './list.repository';
import { ListRepositoryStub } from '@app/mocks/list-repository-stub';
import { ListResolve } from './list.resolve';
import { Starship } from '@app/shared/models/starship.model';

describe('ListResolve', () => {
  let resolver: ListResolve;
  const listRepository = new ListRepositoryStub();
  const starships = [new Starship(
    '1',
    123,
    '543',
    1267890,
    555,
    4324,
    'Test model',
    'Test name',
    55
  ),
  new Starship(
    '2',
    13,
    '53',
    1890,
    55,
    434,
    'Test model 2',
    'Test name 2',
    5
  )];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListResolve,
        {
          provide: ListRepository,
          useValue: listRepository
        }
      ],
    });

    resolver = TestBed.get(ListResolve);
  });

  it('should create ListResolve', () => {
    expect(resolver).toBeTruthy();
  });

  it('should call getStarShips method and handle response correctly', () => {
    const expectedResponse: Starship[] = starships;
    const getStarShipsSpy = spyOn(listRepository, 'getStarShips').and.returnValue(of(expectedResponse));

    const actual: Observable<any> = resolver.resolve();
    actual.subscribe();

    expect(getStarShipsSpy).toHaveBeenCalled();
  });
});
