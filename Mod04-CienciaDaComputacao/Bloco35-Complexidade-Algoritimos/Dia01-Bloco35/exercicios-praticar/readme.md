### Exercícios de Fixação

**Exercício 1:** Qual é a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?

```python-repl
def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number  

    return result
```

**Exercício 4:** Imagine que você recebe dois arrays de tamanho igual, `array1` e `array2`. Para cada elemento do `array1`, realize uma busca binária no `array2`. Mostre que a ordem de complexidade do algoritmo resultante é `O(n * log n)`, ou `O(n log n)`.

**Exercício 2:** Meça o tempo de execução do algoritmo acima e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em `n` vezes, o tempo de execução aumenta em `n²` vezes!

**Exercício 3:** Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de `O(n³)`!

⚠️ Aviso: Não precisa implementar o código aqui!
