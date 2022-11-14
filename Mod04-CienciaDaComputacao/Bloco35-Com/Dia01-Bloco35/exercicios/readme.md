# Agora a prática

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

Vamos colocar tudo o que vimos até agora em prática.

**Exercício 1** Dado um array de números de tamanho `n`, escreva um algoritmo que retorna `true` se há no array um número duplicado e `false` caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.

Copiar

```pyhon
def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False
```

🚀 **Exercício 2** Suponha que se está escrevendo uma função para um jogo de batalha naval. Dado um array bidimensional com `n` linhas e `m` colunas, e um par de coordenadas `x` para linhas e `y` para colunas, o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:

Copiar

```bash
1entrada =[00001
200001
311111
400010]
5
6resultado para (0, 4)= True
7resultado para (1, 1)= False
```

Qual seria a ordem de complexidade da solução para este problema? E a complexidade de espaço?

---

🚀 **Exercício 3** Utilize o módulo `random` da linguagem Python para gerar um array com 100 números. Cada um desses números deve ser a média de `n` números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?

---

**Exercício 4** Dado um array de doces candies e um valor inteiro extra_candies, onde o candies[i] representa o número de doces que a enésima criança possui. Para cada criança, verifique se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código abaixo para o melhor, pior caso e caso médio. Faça a análise de complexidade de espaço também.

Copiar

```python
1defkids_with_candies(candies, extra_candies):
2# parece que a solução percorre o array somente uma vez,
3# porém isto é feito duas vezes, uma no `max` e outra para
4# preencher a resposta
5    max_candies =max(candies)
6return[candy + extra_candies >= max_candies for candy in candies]
7
8
9# saída: [True, True, True, False, True]
10print(kids_with_candies([2,3,5,1,3],3))
```
