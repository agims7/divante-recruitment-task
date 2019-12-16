import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { CartElementComponent } from './cart-element.component';
import { CartService } from '@app/shared/cart.service';
import { CartServiceStub } from '@app/mocks/cart.service.stub';
import { Starship } from '@app/shared/models/starship.model';

describe('CartElementComponent', () => {
  let component: CartElementComponent;
  let fixture: ComponentFixture<CartElementComponent>;

  const cartService = new CartServiceStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartElementComponent
      ],
      imports: [
        // Material
        MatIconModule,
      ],
      providers: [
        {
          provide: CartService,
          useValue: cartService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartElementComponent);
    component = fixture.componentInstance;

    component.starship = new Starship(
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
    component.index = 0;

    fixture.detectChanges();
  });

  it('should create CartElementComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should remove starship from cartService starships array', () => {
    component.removeFromCart();
    expect(cartService.starships).toEqual([]);
  });

  it('should send onCartChange event with value null to cartService', () => {
    const removeFromCartSpy = spyOn(cartService.onCartChange, 'next');
    component.removeFromCart();

    expect(removeFromCartSpy).toHaveBeenCalledWith(null);
  });
});
