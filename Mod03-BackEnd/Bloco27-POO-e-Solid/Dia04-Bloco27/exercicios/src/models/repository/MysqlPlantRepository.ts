import Connection from '../Connection';
import { IPlant } from '../entitites/IPlant';
import { InitPlantModel, ListPlantModel } from '../IPlantModel';

export default class MysqlPlantRepository implements InitPlantModel, ListPlantModel {
    async initPlant(newPlant: IPlant): Promise<void> {
        const waterFrequency = newPlant.needsSun 
            ? newPlant.size * 0.77 + (origin === 'Brazil' ? 8 : 7)
            : (newPlant.size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);


        await Connection.execute(
            'INSERT INTO plants_solid.plants (breed, needsSun, origin, specialCare? size) VALUES (?,?,?,?,?)',
            [newPlant.breed, newPlant.needsSun, newPlant.origin, waterFrequency, newPlant.size],
        );
    }

    async list(): Promise<IPlant[]> {
        const [plants] = await Connection.execute('SELECT * FROM plants_solid.plants');

        return plants as IPlant[];
    }
}