valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4


def get_time_server_instability(arr):
    counters = []
    counter = 0

    # A complexidade desse laço é O(n)
    # pois percorre por toda a entrada no laço
    for i in arr:
        if i == 1:
            counter += 1
        else:
            counters.append(counter)
            counter = 0

    counters.sort(reverse=True)
    # A complexidade do algoritmo é fatorial O(n!).
    # ele é O(1) no melhor caso: se a lista estiver em ordem, ele termina em
    # apenas 1 ciclo.

    return counters[0]


# 2 + N ->  complexidade espaço
# 4 * 2N + n! -> complexidade de tempo

# operações elementares: números de passos constântes, que não esconde um
# algoritmo.


print(get_time_server_instability(valores_coletados))
