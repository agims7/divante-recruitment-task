export class Starship {

  constructor(
    public id: string = '',
    public cargoCapacity: number = 0,
    public consumables: string = '',
    public costInCredits: number = 0,
    public crew: number = 0,
    public length: number = 0,
    public model: string = '',
    public name: string = '',
    public passengers: number = 0,
  ) { }
}
