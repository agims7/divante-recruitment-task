import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ListService {

  public searchChange$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }
}
