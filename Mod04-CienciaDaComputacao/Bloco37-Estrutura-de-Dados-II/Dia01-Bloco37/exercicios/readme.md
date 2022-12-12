## 🚀 Exercício 1 - Facebook

Você receberá uma lista de palavras e uma  *string* . Escreva uma função que decida quais palavras podem ser formadas com os caracteres da *string* (cada caractere só pode ser utilizado uma vez). Retorne a soma do comprimento das palavras escolhidas.

**Exemplo 1:**

Copiar

```python
1words =["cat","bt","hat","tree"], chars ="atach"
2# saída: 6
3"""Explicação: As palavras que podem ser formadas com os caracteres da string
4               são "cat" (tamanho 3) e "hat" (tamanho 3)."""
```

**Exemplo 2:**

Copiar

```python
1words =["hello","world","students"], chars ="welldonehoneyr"
2# saída: 10
3"""Explicação: As palavras que podem ser formadas com os caracteres da string
4               são "hello" (tamanho 5) e "world" (tamanho 5)."""
```

> ⚠️ Faça a análise de complexidade da sua solução.

## Exercício 2 - Google

Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados, além dela própria. Isso significa que uma pessoa que não tem nenhuma equipe tem score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.

Escreva um método que calcule o score de uma determinada pessoa.

👀 **De olho na dica:** para saber o score de uma pessoa, você precisa saber o score das pessoas da equipe dela, correto? Qual estratégia utiliza a mesma função dentro dela própria?

**Exemplo de subordinados:**

Copiar

```bash
1- 1=>2, 3
2
3- 2=>4
4
5- 3=> sem subordinados
6
7- 4=>5, 6
8
9- 5=>7
10
11- 6=> sem subordinados
12
13- 7=> sem subordinados
```

Neste exemplo, o **score** de cada pessoa é:

Copiar

```bash
1- 1=>5(score 2) + 1(score 3) + 1(score dele próprio)=7
2
3- 2=>4(score 4) + 1(score dele próprio)=5
4
5- 3=>1(score dele próprio)
6
7- 4=>2(score 5) + 1(score 6) + 1(score dele próprio)=4
8
9- 5=>1(score 7) + 1(score dele próprio)=2
10
11- 6=>1(score dele próprio)
12
13- 7=>1(score dele próprio)
```

> ⚠️ Faça a análise de complexidade da sua solução.

> `Bônus:` É muito comum em entrevistas que, quando a pessoa resolve o problema dentro do tempo, façam-se perguntas `"follow-up"`, que dificultam a questão. Os `follow-ups` abaixo são opcionais.

**Follow-ups:**

1. Caso a empresa precise fazer essa consulta frequentemente, como você pode tornar essas consultas mais eficientes? Como você pode guardar o resultado de consultas anteriores?
2. Escreva um método para incluir uma nova pessoa na equipe de uma outra pessoa. Seu método deve considerar que cada pessoa pode ter no máximo `k` pessoas em seu time. Se o time estiver cheio, a nova contratada pode ser alocada na equipe de qualquer pessoa abaixo dela, não precisando ser na equipe imediatamente abaixo.
3. Se você adicionar uma nova contratação à lista de subordinadas, a estrutura que você fez no `follow-up 1` está desatualizada. Modifique suas funções para que essa estrutura seja atualizada junto com a adição de uma nova contratação. Faça isso sem rodar de novo a função `score()` e lembre-se de atualizar todos os scores desde a pessoa da presidência até a equipe que a nova contratação entrou.

[](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/section/2ced8aa4-70a8-4d1b-bce3-cd9901f55a29/day/81d0cc74-da57-47f1-b4b0-6d5921556db2/lesson/9704af1d-d68d-4a68-b0b8-fc2c51117c35/solution)
