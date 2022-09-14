interface IService<T> { 
// criação do genérico T, usamos este na assinatura ( parametro e retorno )
// essa tipagem genérica vai permitir utilizar essa interface em muitos serviços;
// subsitution principle, toda classe que implementar essa interface deve implementar os métodos
// com o mesmo param e saída de dados; respeitando a assinatura

  create(obj:unknown):Promise<T>,
  readOne(_id:string):Promise<T>,
  read():Promise<T[]>
}
  
export default IService;