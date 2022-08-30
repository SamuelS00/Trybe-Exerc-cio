export type SpecialCare = { waterFrequency: number }

export interface IPlant {
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: SpecialCare
}

export interface PlantDTO extends IPlant {
  id: number;
}