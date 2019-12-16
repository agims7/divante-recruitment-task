import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('Service: CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartService,
      ],
    });

    service = TestBed.get(CartService);
  });

  it('should create CartService', () => {
    expect(service).toBeTruthy();
  });

});
