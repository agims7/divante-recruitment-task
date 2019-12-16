import { Starship } from '@app/shared/models/starship.model';
import { BehaviorSubject } from 'rxjs';

export class CartServiceStub {
    public starships: Starship[] = [new Starship()];
    public onCartChange: BehaviorSubject<Starship> = new BehaviorSubject<Starship>(null);
}
