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

    first_half = [arr[i] for i in range(0, half)]
    second_half = [arr[i] for i in range(half, len(arr))]

    for i in range(0, half):
        shuffle.append(first_half[i])
        shuffle.append(second_half[i])

    return shuffle


# complexidade espaço -> 2 * 3(n/2)
# complexidade tempo -> 2 * (n/2) + n/2

print(shuffle_cards(cartas))
