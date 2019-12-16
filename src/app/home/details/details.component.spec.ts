import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { ActivatedRouteStub } from '@app/mocks/activated-route.stub';
import { CartService } from '@app/shared/cart.service';
import { CartServiceStub } from '@app/mocks/cart.service.stub';
import { CustomPipesModule } from '@app/shared/custom-pipes/custom-pipes.module';
import { DetailsComponent } from './details.component';
import { Starship } from '@app/shared/models/starship.model';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  const activatedRouter = new ActivatedRouteStub();
  const cartService = new CartServiceStub();
  const router: jasmine.SpyObj<Router> = jasmine.createSpyObj(['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [
        CustomPipesModule,

        // Material
        MatCardModule,
      ],
      providers: [
        {
          provide: CartService,
          useValue: cartService
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouter
        },
        {
          provide: Router,
          useValue: router
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
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
  });

  it('should create DetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should get starships from activatedRoute data with fetchData on init', () => {
    const newStarship = new Starship(
      '7',
      13,
      '53',
      1267,
      55,
      24,
      'Test model',
      'Test name',
      44
    );

    activatedRouter.snapshot.data.starship = newStarship;
    fixture.detectChanges();

    expect(component.starship).toEqual(newStarship);
  });

  it('should get starships from activatedRoute data with fetchData on init and navigate to the list if starship is null', () => {
    activatedRouter.snapshot.data = {};
    fixture.detectChanges();

    expect(router.navigate).toHaveBeenCalledWith(['../']);
  });

  it('should send onCartChange event with starship to cartService on addToCart', () => {
    const addToCartSpy = spyOn(cartService.onCartChange, 'next');
    component.addToCart();

    expect(addToCartSpy).toHaveBeenCalledWith(component.starship);
  });
});
