import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';

import { CustomPipesModule } from '@app/shared/custom-pipes/custom-pipes.module';
import { ListElementComponent } from './list-element.component';
import { Starship } from '@app/shared/models/starship.model';

describe('ListElementComponent', () => {
  let component: ListElementComponent;
  let fixture: ComponentFixture<ListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListElementComponent ],
      imports: [
        CustomPipesModule,
        RouterTestingModule,

        // Material
        MatCardModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElementComponent);
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

  it('should create ListElementComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct url on setRedirectionUrl', () => {
    expect(component.setRedirectionUrl()).toEqual(`/home/details/${component.starship.id}`);
  });
});
