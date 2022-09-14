// padronizar erros;

export enum ErrorTypes {
  // respeita o open/closed aberto para extensão fechado para modificação
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
  TypesObjInvalid = 'TypesObjInvalid',
}

// esse é o tipo do objeto vai ser usado construir a resposta da API
type ErrorResponseObject = { 
  message: string;
  httpStatus: number
};

// aqui o tipo do catálogo
export type ErrorCatalog = {
  // onde cada chave desse objeto é uma chave do Enum ErrorTypes
  // e cada valor é um objeto de resposta da API
  [key in ErrorTypes]: ErrorResponseObject

};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Entity not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    httpStatus: 400,
  },
  TypesObjInvalid: {
    message: 'wrong parameters',
    httpStatus: 400,
  },
};