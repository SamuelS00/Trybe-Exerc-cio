# Exemplo 1:
cartas = [2, 6, 4, 5]
# cartas por parte = 2

resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

resultado = [1, 7, 4, 6, 4, 6]


def shuffle_cards(arr):
    half = len(arr) // 2
    shuffle = []

    for i in range(half):
        shuffle.append(arr[i])
        shuffle.append(arr[half + i])

    return shuffle


# complexidade espaço -> 2 + n
# complexidade tempo -> O(n)

print(shuffle_cards(cartas))
