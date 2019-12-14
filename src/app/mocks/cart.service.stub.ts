import { Starship } from '@app/shared/models/starship.model';
import { BehaviorSubject } from 'rxjs';

export class CartServiceStub {
    public starships: Starship[] = [];
    public finalCost = 0;
    public onCartChange: BehaviorSubject<Starship> = new BehaviorSubject<Starship>(null);
  
}