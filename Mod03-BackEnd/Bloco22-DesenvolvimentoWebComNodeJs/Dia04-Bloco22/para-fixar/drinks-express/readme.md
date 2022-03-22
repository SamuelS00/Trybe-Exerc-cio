### Para Fixar

1. Crie uma array drinks com os seguintes objetos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.
```
const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
```

2. Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.

Pronto, já temos uma rota da nossa API que devolve a lista dos receitas disponíveis, mas não precisamos parar por aqui. E se quiséssemos conseguir acessar uma receita específica pelo seu id ? ou mesmo procurar por todas os receitas que tem a palavra Macarrão no nome? Além disso, como fazemos para permitir adicionar, editar ou remover receitas da lista através da nossa API?

3. Crie uma rota GET /drink/:id para retornar uma bebida pelo id .
