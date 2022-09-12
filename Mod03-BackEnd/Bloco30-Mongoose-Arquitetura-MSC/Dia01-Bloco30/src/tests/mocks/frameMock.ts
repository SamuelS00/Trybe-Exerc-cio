import IFrame from '../../interfaces/Frame';

// testar entidade. 
// começar construindo os objetos.
// organizar comportamentos. lifar com entidades. ( Dar vida ao software );
// pois assim observamos oq ira transitar no dominio.

const frameMock: IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockWithId:IFrame & { _id:string } = {  // interceção com outro tipo
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe'
};

export { frameMock, frameMockWithId };
