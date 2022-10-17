n = 20
last, next = 0, 1 # atribuição múltipla. atribuição de vários valores a múltiplas váriaveis.
while last < n:
    print(last)
    last, next = next, last + next


# com o truque da atribuição de valores podemos fazer a troca de valores entre váriaveis.
# a, b = b, a