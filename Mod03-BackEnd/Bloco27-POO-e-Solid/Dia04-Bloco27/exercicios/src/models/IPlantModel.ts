import { IPlant } from './entitites/IPlant';

export interface ListPlantModel {
  list(): Promise<IPlant[]>;
}

export interface InitPlantModel {
  initPlant(newPlant: IPlant): Promise<void>;
}
  