## 🚀 Exercício 1 - Blefe

Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive. A pontuação final é calculada da seguinte forma:

* A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
* O redutor é o menor numero que a outra pessoa não escolheu;
* A pontuação final é a `nota de partida - redutor`.

*Exemplo:*

Copiar

```python
1clara =[0,1,5,9,10]
2# nota de partida: 5
3# redutor: 1
4# pt: 4
5
6marco =[0,2,8,9,10]
7# nota de partida: 8
8# redutor: 2
9# pt individual: 6
10
11# Quem ganhou: Marco
```

Implemente uma função que receba um dicionário com os nomes e números chutados e retorne o nome de quem ganhou.

Copiar

```python
1entrada ={
2'Clara':[0,1,5,9,10],
3'Marco':[0,2,8,9,10]
4}
5
6# saída: 'Marco'
```

> **Faça a análise de complexidade da sua solução.**

## Exercício 2 - Substring

Dada uma  *string* , ache o tamanho da maior *substring* que não tenha caracteres repetidos. Complexidade de tempo limite aceitável: `O(n²)`.

Copiar

```python
1string ="serdevemuitolegalmasehprecisoestudarbastante"
```

> **Faça a análise de complexidade da sua solução.**
