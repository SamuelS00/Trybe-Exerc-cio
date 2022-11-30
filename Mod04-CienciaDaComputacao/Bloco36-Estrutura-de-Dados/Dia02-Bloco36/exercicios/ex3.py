# Exemplo 1:
produtos = [1, 3, 1, 1, 2, 3]
resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
resultado = 1
# Os índices (0, 1) formam a única combinação.


def get_better_combinations(arr):
    combinations = []
    stop = 0

    for i in arr:
        for j in range(stop + 1, len(arr)):
            if arr[j] == arr[stop]:
                combinations.append((stop, j))
        stop += 1

    return combinations


# complexidade de espaço: 3 + n
# complexidade de tempo: O(n) * O(n - 1)

print(get_better_combinations(produtos))
