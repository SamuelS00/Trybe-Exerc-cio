## Exercícios de fixação

**Exercício 1: Inicializando a classe e adicionando elementos**

* Crie uma classe chamada `Conjunto`;
* Escreva um construtor que defina uma lista do tamanho necessário. Inicialize todos os valores com `False`, uma vez que ainda não temos valores adicionados;
* Crie um método `add(item)` que recebe um valor até 1000 e adiciona no conjunto;
* Na `main` (dentro de: `if __name__ == "__main__":`), instancie um objeto do tipo `Conjunto` e adicione os valores.

Copiar

```bash
1[0, 10, 100, 1000]
```

**Exercício 2: Imprimir**

Caso tenhamos que imprimir na tela o nosso objeto, o comando `print(conjunto)` não irá funcionar. O que será impresso é o endereço de memória onde o objeto está guardado, e não é isso que queremos. Para que o comando print funcione, precisamos que a nossa classe tenha um método chamado `__str__` e é o que faremos agora:

* Crie um método com a assinatura abaixo:

Copiar

```python
1def__str__(self):
2# retorno: uma string que representa o seu objeto
```

* *Exemplos de entrada e saída:*

Copiar

```bash
1A ={1, 2, 3}
2# saída: '{1, 2, 3}'
3
4B ={7, 2, 10}
5# saída: '{2, 7, 10}'
6
7C ={}
8# saída: '{}'
```

A saída não precisa ser ordenada, até mesmo porque um conjunto não leva a ordem em consideração. A saída pode ser em qualquer ordem, mas provavelmente será mais fácil retornar em ordem. Teste seu método imprimindo os objetos que você criou.

**Exercício 3: is_in**

Caso queiramos saber se um elemento faz parte ou não do conjunto usando o operador `in` precisamos que a nossa classe tenha um método chamado `__contains__` e é o que faremos agora:

* Crie um método com a assinatura abaixo:

Copiar

```python
1def__contains__(self, item):
2# retorno: True, caso o elemento faça parte. False, caso o elemento não faça parte.
```

* *Exemplos de entrada e saída:*

Copiar

```bash
1A ={1, 2, 3}
2
3# entrada: 1
4# saída: True
5
6# entrada: 0
7# saída: False
```

**Exercício 4: União**

**União: Todos os elementos que estão em A OU em B**

* Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe `Conjunto`:

Copiar

```python
1defunion(self, conjuntoB):
2# retorno: outro objeto Conjunto com união do próprio objeto com o conjuntoB
```

* Na `main`, instancie dois objetos do tipo `Conjunto`. Preencha o primeiro com os valores de  **1 a 10** , e o segundo, com valores de  **10 a 20** ;
* Imprima na tela a união dos dois conjuntos.

**Exercício 5: Intersecção**

**Intersecção: Todos os elementos que estão em A E em B**

* Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe `Conjunto`:

Copiar

```python
1defintersection(self, conjuntoB):
2# retorno: outro objeto Conjunto com intersecção do próprio objeto com o conjuntoB
```

* *Exemplos de entrada e saída:*

Copiar

```bash
1A ={1, 2, 3}
2B ={3, 4, 5}
3# saída: {3}
4
5C ={0, 3, 6, 9}
6B ={12, 15, 18}
7# saída: {}
```

Pronto, passados todos os exercícios temos nossa primeira classe `Conjunto` implementada! Existem outras operações que deveríamos implementar para torná-la completa, mas vamos fazer isso nos exercícios do conteúdo. Agora vamos prosseguir com o conteúdo para vermos a sintaxe de `Set`.

[](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/section/2ced8aa4-70a8-4d1b-bce3-cd9901f55a29/day/205a92d2-72de-4ddd-a800-b969f28794c5/lesson/b5b40b7d-fd13-444b-9fbd-8c6d8ecd6b9b/solution)
