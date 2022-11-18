# Exercícios - agora, a prática

Vamos colocar tudo o que vimos até agora em prática.

Para medir o tempo de execução de um algoritmo (em segundos) implemente a seguinte  *classe* :

Copiar

```python
1from time import perf_counter
2
3
4classCronometro:
5def__init__(self, name="Seu algoritmo"):
6        self.name = name
7def__enter__(self):
8        self.start = perf_counter()
9def__exit__(self,*exc):
10        elapsed = perf_counter()- self.start
11print(f"{self.name} demorou {elapsed} segundos")
```

Para utilizar o `Cronometro`, basta usá-lo dentro de um `with` e em seguida chamar a função:

Copiar

```python
1from Cronometro import Cronometro
2
3
4with Cronometro("algoritmo"):
5    algoritmo(...)
6
```

**Exercício 1** Dado um array com os seguintes elementos `["zebra", "macaco", "elefante", "arara", "javali"]`, após duas iterações utilizando  *bubble sort* , como estaria este array?

**Exercício 2** Demonstre o passo a passo do processo de mistura de um array, sendo ordenado utilizando  *merge sort* . Comece o passo a passo a partir da linha abaixo:

Copiar

```md
17 3    5 4    6 8    2 1
```

**Exercício 3** Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias. Em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.

▶️ A entrada de dados pode ser gerada da seguinte maneira:

Copiar

```python
1from random import shuffle
2
3
4ordenados =list(range(100))
5inversamente_ordenados =list(reversed(range(100)))
6aleatorios = ordenados[:]# copia dos ordenados
7shuffle(aleatorios)# embaralha eles
```

**Exercício 4** Compare o tempo de execução do algoritmo `merge_sort` e `bubble_sort` para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.

**Exercício 5** Converta o algoritmo recursivo de busca binária em iterativo.

**Exercício 6** Para descobrirmos qual *commit* introduziu um erro no sistema, precisamos voltar no tempo verificando os *commits* antigos, de modo a descobrir um *commit* em que os testes falham. Supondo que isto será representado como um  **array de booleanos** , descubra o índice onde o erro ocorreu pela primeira vez.

Como os testes demoram a rodar, resolva o problema rodando o mínimo de testes possíveis.

Copiar

```md
1entrada: [True, True, True, True, False, False, False]  # saída: 4
2
3
4entrada: [True, True, False, False, False, False, False]  # saída: 2
```

> 💡 Curiosidade: O comando git bisect executa de maneira similar a este exercício se implementado de forma eficiente 😂.
>
