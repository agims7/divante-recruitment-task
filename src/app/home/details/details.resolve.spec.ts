import { TestBed } from '@angular/core/testing';

import { DetailsRepository } from './details.repository';
import { DetailsRepositoryStub } from '@app/mocks/details-repository-stub copy';
import { DetailsResolve } from './details.resolve';

describe('DetailsResolve', () => {
  let resolver: DetailsResolve;

  const detailsRepository = new DetailsRepositoryStub();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DetailsResolve,
        {
          provide: DetailsRepository,
          useValue: detailsRepository
        }
      ],
    });

    resolver = TestBed.get(DetailsResolve);
  });

  it('should create DetailsResolve', () => {
    expect(resolver).toBeTruthy();
  });
});
