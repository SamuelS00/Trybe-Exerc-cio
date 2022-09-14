interface IModel<T> {
  create(obj:T):Promise<T>,
  readOne(_id:string):Promise<T | null>,
  read(): Promise<T[]>,
  destroy(_id: string): Promise<string>
  // vai retornar uma promisse que pode retornar um tipo passado quanto null
}

export default IModel;