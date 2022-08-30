import { IPlant, PlantDTO, SpecialCare } from './IPlant';

export default class Plant implements PlantDTO {
  constructor(
    public readonly id: number,
    public breed: string,
    public needsSun: boolean,
    public origin: string,
    public size: number,
    public specialCare?: SpecialCare
  ) {
    this.id = 0,
    this.breed = ''
    this.needsSun = false,
    this.origin = '',
    this.size = 0,
    this.specialCare = { waterFrequency: 0 };
  }
};
