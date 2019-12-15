import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ActivatedRouteStub } from '@app/mocks/activated-route.stub';
import { CustomPipesModule } from '@app/shared/custom-pipes/custom-pipes.module';
import { ListComponent } from './list.component';
import { ListElementComponent } from './list-element/list-element.component';
import { ListRepository } from './list.repository';
import { ListRepositoryStub } from '@app/mocks/list-repository-stub';
import { ListService } from './list.service';
import { SearchComponent } from './search/search.component';
import { Starship } from '@app/shared/models/starship.model';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let listRepository: ListRepositoryStub;
  
  const activatedRouter = new ActivatedRouteStub();
  activatedRouter.snapshot.data.starships = [new Starship()]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        ListElementComponent,
        SearchComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        CustomPipesModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,

        // Materials
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
      ],
      providers:
      [
        ListService,
        {
          provide: ListRepository,
          useValue: listRepository
        },
        {
          provide: ActivatedRoute, 
          useValue: activatedRouter
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return index on trackByIndex', () => {
    // TO DO
  });
});
