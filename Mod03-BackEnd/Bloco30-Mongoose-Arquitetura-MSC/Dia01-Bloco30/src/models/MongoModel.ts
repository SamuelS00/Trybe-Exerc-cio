import { isValidObjectId, Model } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
import IModel from '../interfaces/IModel';

// o do solid, aberta para extensão, fechada para modificação. 
// alguém necessita extender;

abstract class MongoModel<T> implements IModel<T> { // implementa um contrato a ser seguido;
  // vai precisar implementar o create e readOne, pois até especificado no IModel.  
  protected _model:Model<T>;

  // privado para fora da classe, mas publico para quem extende;
  // acesso para quem extende;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);

    // isValidObjectId: comumente obervamos que o db retorna um id automatico.
    // moongose testa se esse objeto é válido.
    
    return this._model.findOne({ _id });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async destroy(_id: string): Promise<string> {
    this._model.deleteOne({ _id });

    return 'ok';
  }
}

export default MongoModel;