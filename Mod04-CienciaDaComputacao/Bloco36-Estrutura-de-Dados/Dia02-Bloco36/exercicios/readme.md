# Exercícios - agora, a prática

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

🚀**Exercício 1** Em um software monitor, o qual verifica a resiliência de outro software, precisamos saber o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.

Copiar

```bash
11 - OK
20 - Instabilidades
3
4valores_coletados =[0, 1, 1, 1, 0, 0, 1, 1]
5resultado =3
6
7valores_coletados =[1, 1, 1, 1, 0, 0, 1, 1]
8resultado =4
```

> **Faça a análise de complexidade da sua solução.**

**Exercício 2** Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:

Copiar

```bash
1Exemplo 1:
2cartas =[2, 6, 4, 5]
3cartas por parte =2
4
5resultado =[2, 4, 6, 5]
6
7Exemplo 2:
8cartas =[1, 4, 4, 7, 6, 6]
9cartas por parte =3
10
11resultado =[1, 7, 4, 6, 4, 6]
```

> **Faça a análise de complexidade da sua solução.**

**Exercício 3** Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa. Verifique quantos produtos formam boas combinações, ou seja, quando um produto é igual ao outro e seu índice é maior que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:

Copiar

```bash
1Exemplo 1:
2produtos =[1, 3, 1, 1, 2, 3]
3resultado =4
4Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.
5
6Exemplo 2:
7produtos =[1, 1, 2, 3]
8resultado =1
9Os índices (0, 1) formam a única combinação.
```

> **Faça a análise de complexidade da sua solução.**

**Exercício 4** Você têm dois arrays de números inteiros que representam: (I) instantes de entrada e saídas em uma biblioteca (II) um número que represente um instante a ser buscado. Retorne quantas pessoas estudantes estão na biblioteca naquele instante. Considere que todo estudante que entrou e saiu da biblioteca.

Copiar

```bash
1entradas =[1, 2, 3]
2saídas =[3, 2, 7]
3instante_buscado =4
4resultado: 1
5
6O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
7e saiu no 2 e o último foi único a estar presente no instante 4.
```

> **Faça a análise de complexidade da sua solução.**

**Exercício 5** Em um software gerenciador de servidores, precisamos verificar o número de servidores que se comunicam. Os servidores estão representados como um array bidimensional onde o valor 1 representa um computador e 0 a ausência do mesmo. Dois servidores se comunicam se eles estão na mesma linha ou mesma coluna.

Copiar

```bash
1servidores =[[1,0],[0,1]]
2resultado: 0
3Linhas e colunas são diferentes.
4
5servidores =[[1,0],[1,1]]
6resultado: 3
7Todos os servidores se comunicam com ao menos um outro servidor.
8
9servidores =[[1, 0, 0],
10[1, 0, 0],
11[0, 0, 1]]
12resultado: 2
13O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.
```

> **Faça a análise de complexidade da sua solução.**
>
