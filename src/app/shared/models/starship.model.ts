export class Starship {

  constructor(
    public id: string = '',
    public cargo_capacity: number = 0,
    public consumables: string = '',
    public cost_in_credits: number = 0,
    public crew: number = 0,
    public length: number = 0,
    public model: string = '',
    public name: string = '',
    public passengers: number = 0,
  ) { }
}
