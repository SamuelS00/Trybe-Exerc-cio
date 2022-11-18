from random import shuffle
from cronometro import Cronometro


def selection_sort(numbers):
    n = len(numbers)

    for index in range(n - 1):
        min_element_index = index

        for search_index in range(index + 1, n):
            if numbers[search_index] < numbers[min_element_index]:
                min_element_index = search_index

        current_element = numbers[index]
        numbers[index] = numbers[min_element_index]
        numbers[min_element_index] = current_element

    return numbers


def insertion_sort(numbers):
    n = len(numbers)

    for index in range(1, n):
        key = numbers[index]

        new_position = index - 1
        while new_position >= 0 and numbers[new_position] > key:
            numbers[new_position + 1] = numbers[new_position]
            new_position = new_position - 1

        numbers[new_position + 1] = key

    return numbers


for input in [10**4, 10**5, 10**6]:
    ordenados = list(range(input))
    inversamente_ordenados = list(reversed(range(input)))
    aleatorios = ordenados[:]
    shuffle(aleatorios)

    for algorithm in [selection_sort, insertion_sort]:
        algorithm_name = algorithm.__name__

        with Cronometro(f"O {algorithm_name} ordenados"):
            algorithm(ordenados)

        with Cronometro(f"O {algorithm_name} inversamente ordenados"):
            algorithm(inversamente_ordenados)

        with Cronometro(f"O {aleatorios} aleatorios"):
            algorithm(aleatorios)
