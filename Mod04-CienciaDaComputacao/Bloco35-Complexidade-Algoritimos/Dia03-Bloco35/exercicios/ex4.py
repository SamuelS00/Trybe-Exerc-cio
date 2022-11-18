from ex1 import bubble_sort
from random import shuffle
from cronometro import Cronometro


ordenados = list(range(10000))
shuffle(ordenados)


def merge_sort(numbers, start=0, end=None):
    if end is None:
        end = len(numbers)
    if (end - start) > 1:
        mid = (start + end) // 2
        merge_sort(numbers, start, mid)
        merge_sort(numbers, mid, end)
        merge(numbers, start, mid, end)


def merge(numbers, start, mid, end):
    left = numbers[start:mid]
    right = numbers[mid:end]

    left_index, right_index = 0, 0

    for general_index in range(start, end):
        if left_index >= len(left):
            numbers[general_index] = right[right_index]
            right_index = right_index + 1
        elif right_index >= len(right):
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        elif left[left_index] < right[right_index]:
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        else:
            numbers[general_index] = right[right_index]
            right_index = right_index + 1


for algorithm in [merge_sort, bubble_sort]:
    algorithm_name = algorithm.__name__

    with Cronometro(f"O {algorithm_name} ordenados"):
        algorithm(ordenados)


# o bubble sort tem a complexidade de O(n²) a quantidade de operações é
# proporcional a entrada de dados

# o merge sort tem a complexidade de O (n log n) a quantidade
# da entrada vai ser reduzida a cada operação
