import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { ActivatedRouteStub } from '@app/mocks/activated-route.stub';
import { CartService } from '@app/shared/cart.service';
import { CustomPipesModule } from '@app/shared/custom-pipes/custom-pipes.module';
import { DetailsComponent } from './details.component';
import { Starship } from '@app/shared/models/starship.model';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  const activatedRouter = new ActivatedRouteStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [
        CustomPipesModule,

        // Material
        MatCardModule,
      ],
      providers: [
        CartService,
        {
          provide: ActivatedRoute, 
          useValue: activatedRouter
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
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should get starships from activatedRoute data on fetchData', () => {
    // TO DO
  });

  it('should send onCartChange event with starship to cartService on addToCart', () => {
    // TO DO
  });
});
