# Exercícios - agora, a prática

Para encerrarmos o conteúdo do dia com chave de ouro temos aqui alguns exercícios para fixar o nosso aprendizado sobre o `TAD LinkedLists` 😀. É um  *momento que temos que festejar* .

| ![Carlton - It](https://content-assets.betrybe.com/prod/Carlton%20-%20It.gif) |
| --------------------------------------------------------------------------- |
| Carlton - It’s not unusual to have fun with anyone                         |

## Exercício 1:

 *Aprimorando a classe `Lista`* : nossa classe `Lista` atende as principais operações que essa `TAD` nos oferece, mas que tal melhorarmos? Para isso, você deve adicionar os seguintes métodos:

**a.** A operação `clear` nos permite remover todos os `Nodes` da lista;

**b.** A operação `__get_node_at` nos permite acessar o `Node` em qualquer posição da lista.

> Após criada as operações anteriores, refatore os seguintes métodos para que utilizem a `__get_node_at` ante iterações:

* **insert_at** ;
* **insert_last** ;
* **remove_last** ;
* **remove_at** ;
* **get_element_at** .

> ⚠️ **Faça a análise de complexidade da sua solução.**

## Exercício 2:

 *Nova busca* : até o momento nossa estrutura consulta elementos através da posição. Nesta atividade será necessário criar uma função chamada `def index_of(self, value)`, onde ela será responsável por consultar na lista a existência do valor informado e retornar a posição da primeira ocorrência. Caso o valor não exista, considere retornar `-1`. Esta função deve respeitar a complexidade `O(n)`.

> ⚠️ **Faça a análise de complexidade da sua solução.**
>
